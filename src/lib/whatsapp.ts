export function normalizePhoneNumber(input: string) {
  return input.replace(/[^\d]/g, "");
}

export function buildWhatsAppLink(args: { phone?: string; message?: string; url?: string }) {
  const explicitUrl = args.url?.trim();
  if (explicitUrl) return explicitUrl;

  const phone = args.phone ? normalizePhoneNumber(args.phone) : "";
  const base = phone ? `https://wa.me/${phone}` : "https://wa.me/";

  const message = args.message?.trim();
  if (!message) return base;

  return `${base}?text=${encodeURIComponent(message)}`;
}
