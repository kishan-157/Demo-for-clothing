/**
 * Helper to calculate live store opening status in Ahmedabad, India (IST / Asia/Kolkata)
 * The Baadshah Garment & Accessories: Open 10:30 AM - 10:30 PM every day (Monday to Sunday)
 */
export function getStoreStatus(): {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
  currentIndianTime: string;
} {
  try {
    const now = new Date();
    // Format to Asia/Kolkata
    const formatter = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    
    const parts = formatter.formatToParts(now);
    let hour = 0;
    let minute = 0;
    for (const part of parts) {
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    const currentDecimalHour = hour + minute / 60;
    const openTime = 10.5; // 10:30 AM
    const closeTime = 22.5; // 10:30 PM

    const isOpen = currentDecimalHour >= openTime && currentDecimalHour < closeTime;

    const timeDisplay = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(now);

    if (isOpen) {
      return {
        isOpen: true,
        statusText: 'Open Now',
        nextEventText: 'Closes at 10:30 PM IST',
        currentIndianTime: `${timeDisplay} IST`,
      };
    } else if (currentDecimalHour < openTime) {
      return {
        isOpen: false,
        statusText: 'Closed Now',
        nextEventText: 'Opens today at 10:30 AM IST',
        currentIndianTime: `${timeDisplay} IST`,
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Closed For The Night',
        nextEventText: 'Opens tomorrow at 10:30 AM IST',
        currentIndianTime: `${timeDisplay} IST`,
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: 'Open Today',
      nextEventText: '10:30 AM – 10:30 PM',
      currentIndianTime: 'Ahmedabad, India',
    };
  }
}

export function formatWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}
