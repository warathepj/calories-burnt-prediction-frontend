export const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'UTC',  // Use consistent timezone
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }