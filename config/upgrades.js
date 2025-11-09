// Passive Income Upgrades
const PASSIVE_UPGRADES = [
  {
    id: 1,
    name: 'Кириешки',
    description: 'Автоматический кликер, который генерирует монеты',
    basePrice: 15,
    baseIncome: 0.1,
    priceMultiplier: 1.15,
    icon: '🍟'
  },
  {
    id: 2,
    name: 'Майнер',
    description: 'Простой майнер для добычи цифровых монет',
    basePrice: 100,
    baseIncome: 1,
    priceMultiplier: 1.15,
    icon: '⛏️'
  },
  {
    id: 3,
    name: 'Ферма',
    description: 'Майнинг ферма с несколькими видеокартами',
    basePrice: 1100,
    baseIncome: 8,
    priceMultiplier: 1.15,
    icon: '🏭'
  },
  {
    id: 4,
    name: 'Банк',
    description: 'Инвестиции в банковские депозиты',
    basePrice: 12000,
    baseIncome: 47,
    priceMultiplier: 1.15,
    icon: '🏦'
  },
  {
    id: 5,
    name: 'Приоры',
    description: 'Скучаем по ним',
    basePrice: 130000,
    baseIncome: 260,
    priceMultiplier: 1.15,
    icon: '🚗'
  },
  {
    id: 6,
    name: 'Костик',
    description: 'Костя',
    basePrice: 1400000,
    baseIncome: 1400,
    priceMultiplier: 1.15,
    icon: '🧑🏻'
  },
  {
    id: 7,
    name: 'Артёмчик',
    description: 'Артём',
    basePrice: 20000000,
    baseIncome: 7800,
    priceMultiplier: 1.15,
    icon: '👦🏻'
  },
  {
    id: 8,
    name: 'Филип Моррис!',
    description: 'Самый высокий статус',
    basePrice: 330000000,
    baseIncome: 44000,
    priceMultiplier: 1.15,
    icon: '🚬'
  }
];

// Click Power Upgrades
const CLICK_UPGRADES = [
  {
    id: 1,
    name: 'Крепкий палец',
    description: 'Увеличивает силу клика',
    basePrice: 50,
    clickBoost: 1,
    priceMultiplier: 1.5,
    icon: '👆'
  },
  {
    id: 2,
    name: 'Турбо палец',
    description: 'Турбо-улучшение для пальца',
    basePrice: 500,
    clickBoost: 5,
    priceMultiplier: 1.5,
    icon: '💪'
  },
  {
    id: 3,
    name: 'Мега удар',
    description: 'Мощный удар за клик',
    basePrice: 5000,
    clickBoost: 25,
    priceMultiplier: 1.5,
    icon: '👊'
  },
  {
    id: 4,
    name: 'Супер сила',
    description: 'Сверхчеловеческая сила клика',
    basePrice: 50000,
    clickBoost: 100,
    priceMultiplier: 1.5,
    icon: '⚡'
  },
  {
    id: 5,
    name: 'Божественный клик',
    description: 'Сила богов в одном клике',
    basePrice: 500000,
    clickBoost: 500,
    priceMultiplier: 1.5,
    icon: '✨'
  },
  {
    id: 6,
    name: 'Космическая мощь',
    description: 'Энергия космоса в вашем клике',
    basePrice: 5000000,
    clickBoost: 2500,
    priceMultiplier: 1.5,
    icon: '🌟'
  }
];

// Helper functions
function calculateUpgradePrice(basePrice, level, multiplier) {
  return Math.floor(basePrice * Math.pow(multiplier, level));
}

function calculateUpgradeIncome(baseIncome, level) {
  return baseIncome * level;
}

function calculateClickBoost(baseBoost, level) {
  return baseBoost * level;
}

function getPassiveUpgrade(id) {
  return PASSIVE_UPGRADES.find(u => u.id === id);
}

function getClickUpgrade(id) {
  return CLICK_UPGRADES.find(u => u.id === id);
}

module.exports = {
  PASSIVE_UPGRADES,
  CLICK_UPGRADES,
  calculateUpgradePrice,
  calculateUpgradeIncome,
  calculateClickBoost,
  getPassiveUpgrade,
  getClickUpgrade
};
