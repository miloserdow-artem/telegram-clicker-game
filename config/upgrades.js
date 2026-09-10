// Passive Income Upgrades
const PASSIVE_UPGRADES = [
  {
    id: 1,
    name: 'Уровень 1',
    description: 'Описание',
    basePrice: 100,
    baseIncome: 0.01,
    priceMultiplier: 1.2,
    icon: '🍟'
  },
  {
    id: 2,
    name: 'Уровень 2',
    description: 'Описание',
    basePrice: 1000,
    baseIncome: 0.1,
    priceMultiplier: 1.2,
    icon: '⛏️'
  },
  {
    id: 3,
    name: 'Уровень 3',
    description: 'Описание',
    basePrice: 10000,
    baseIncome: 1,
    priceMultiplier: 1.2,
    icon: '🏭'
  },
  {
    id: 4,
    name: 'Уровень 4',
    description: 'Описание',
    basePrice: 100000,
    baseIncome: 5,
    priceMultiplier: 1.2,
    icon: '🏦'
  },
  {
    id: 5,
    name: 'Уровень 5',
    description: 'Описание',
    basePrice: 1000000,
    baseIncome: 25,
    priceMultiplier: 1.2,
    icon: '🚗'
  },
  {
    id: 6,
    name: 'Уровень 6',
    description: 'Описание',
    basePrice: 10000000,
    baseIncome: 100,
    priceMultiplier: 1.2,
    icon: '🧑🏻'
  },
  {
    id: 7,
    name: 'Уровень 7',
    description: 'Описание',
    basePrice: 100000000,
    baseIncome: 500,
    priceMultiplier: 1.2,
    icon: '👦🏻'
  },
  {
    id: 8,
    name: 'Уровень 8',
    description: 'Описание',
    basePrice: 1000000000,
    baseIncome: 2500,
    priceMultiplier: 1.2,
    icon: '🚬'
  }
];

// Click Power Upgrades
const CLICK_UPGRADES = [
  {
    id: 1,
    name: 'Уровень 1',
    description: 'Описание',
    basePrice: 200,
    clickBoost: 1,
    priceMultiplier: 1.7,
    icon: '👆'
  },
  {
    id: 2,
    name: 'Уровень 2',
    description: 'Описание',
    basePrice: 2000,
    clickBoost: 2,
    priceMultiplier: 1.7,
    icon: '💪'
  },
  {
    id: 3,
    name: 'Уровень 3',
    description: 'Описание',
    basePrice: 20000,
    clickBoost: 5,
    priceMultiplier: 1.7,
    icon: '👊'
  },
  {
    id: 4,
    name: 'Уровень 4',
    description: 'Описание',
    basePrice: 200000,
    clickBoost: 10,
    priceMultiplier: 1.7,
    icon: '⚡'
  },
  {
    id: 5,
    name: 'Уровень 5',
    description: 'Описание',
    basePrice: 2000000,
    clickBoost: 25,
    priceMultiplier: 1.7,
    icon: '✨'
  },
  {
    id: 6,
    name: 'Уровень 6',
    description: 'Описание',
    basePrice: 20000000,
    clickBoost: 50,
    priceMultiplier: 1.7,
    icon: '🌟'
  }
];

// Bomb Upgrade
const BOMB_UPGRADE = {
  initialDamage: 100000,
  damageMultiplier: 1.2,
  basePrice: 50000,
  priceMultiplier: 1.2
};

// Shield Upgrade
const SHIELD_UPGRADE = {
  initialDurationMinutes: 180, // 3 hours
  durationIncreaseMinutes: 10,
  basePrice: 500000,
  priceMultiplier: 1.2
};

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

function calculateBombDamage(level) {
  return Math.floor(BOMB_UPGRADE.initialDamage * Math.pow(BOMB_UPGRADE.damageMultiplier, level));
}

function calculateShieldDuration(level) {
  return SHIELD_UPGRADE.initialDurationMinutes + (SHIELD_UPGRADE.durationIncreaseMinutes * level);
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
  BOMB_UPGRADE,
  SHIELD_UPGRADE,
  calculateUpgradePrice,
  calculateUpgradeIncome,
  calculateClickBoost,
  calculateBombDamage,
  calculateShieldDuration,
  getPassiveUpgrade,
  getClickUpgrade
};
