export function normalizePhoneNumber(input: string) {
  return input.replace(/[^\d]/g, "");
}

export function buildWhatsAppLink(args: { phone?: string; message?: string; url?: string }) {
  const explicitUrl = args.url?.trim();
  if (explicitUrl) {
    const hasPhoneInUrl =
      /wa\.me\/\d{8,15}/.test(explicitUrl) || /[?&]phone=\d{8,15}/.test(explicitUrl);
    if (hasPhoneInUrl) return explicitUrl;
  }

  const phone = args.phone ? normalizePhoneNumber(args.phone) : "";
  if (!phone) return null;

  const base = `https://wa.me/${phone}`;

  const message = args.message?.trim();
  if (!message) return base;

  return `${base}?text=${encodeURIComponent(message)}`;
}
