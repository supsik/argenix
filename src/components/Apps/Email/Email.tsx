import {
  type SubmitEvent,
  useEffect,
  useState,
  useRef,
} from 'react';
import styles from './Email.module.scss';
import toast  from 'react-hot-toast';

const COOLDOWN_MS = 40000;

export default function Email() {
  const [isSending, setIsSending]       = useState(false);
  const [cooldownLeft, setCooldownLeft] = useState(0);

  const formRef     = useRef<HTMLFormElement>(null);
  const timeoutRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const isCooldown = cooldownLeft > 0;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startCooldown = () => {
    const endTime = Date.now() + COOLDOWN_MS;
    setCooldownLeft(Math.ceil(COOLDOWN_MS / 1000));

    intervalRef.current = setInterval(() => {
      const left = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
      setCooldownLeft(left);
      if (left === 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, 1000);

    timeoutRef.current = setTimeout(() => {
      setCooldownLeft(0);
    }, COOLDOWN_MS);
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isCooldown) {
      toast.loading(`Подождите ещё ${cooldownLeft} сек.`);
      return;
    }

    const form     = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', process.env.WEB3FORMS_KEY!);

    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success)
        throw new Error(data?.message ?? 'Ошибка отправки');

      toast.success('Ваше сообщение успешно отправлено');
      formRef.current?.reset();
      startCooldown();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Неизвестная ошибка';
      toast.error(`Не удалось отправить сообщение: ${message}`);
    } finally {
      setIsSending(false);
    }
  };

  const disabled = isSending;

  return (
    <form ref={formRef} className={styles.emailWr} onSubmit={handleSubmit}>
      <div className={styles.emailHeader}>
        <label className={styles.emailLabel}>
          <span>to:</span>
          <div className={styles.emailMail}>frontech@mail.ru</div>
        </label>
        <label className={styles.emailLabel}>
          <span>name:</span>
          <input
            type="text"
            name="name"
            required
            disabled={isSending}
            autoComplete="name"
          />
        </label>
        <label className={styles.emailLabel}>
          <span>email:</span>
          <input
            type="email"
            name="email"
            required
            disabled={isSending}
            autoComplete="email"
          />
        </label>
      </div>

      <textarea
        name="message"
        placeholder="Введите ваше сообщение"
        required
        disabled={isSending}
        aria-label="Сообщение"
      />

      <button type="submit" disabled={disabled} aria-busy={isSending}>
        {isSending ? 'Отправка...' : 'Отправить'}
      </button>
    </form>
  );
}