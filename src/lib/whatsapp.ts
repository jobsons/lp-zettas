export function normalizePhoneNumber(input: string) {
  return input.replace(/[^\d]/g, "");
}

export function buildWhatsAppLink(args: { phone?: string; message?: string; url?: string }) {
  const explicitUrl = args.url?.trim();
  if (explicitUrl) return explicitUrl;

  const phone = args.phone ? normalizePhoneNumber(args.phone) : "";
  if (!phone) return null;

  const base = "https://api.whatsapp.com/send";

  const message = args.message?.trim();
  if (!message) return `${base}?phone=${phone}`;

  return `${base}?phone=${phone}&text=${encodeURIComponent(message)}`;
}
