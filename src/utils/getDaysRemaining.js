function getDaysRemaining(date) {
  if (!date) return null;

  const targetDate = new Date(date);

  const today = new Date();

  const timeDiff = targetDate.getTime() - today.getTime();

  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  if (daysRemaining < 0) return -1;

  if (daysRemaining === 0) return 0;

  if (daysRemaining > 0) return daysRemaining;

  return null;
}

export default getDaysRemaining;
