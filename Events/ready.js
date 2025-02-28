module.exports = {
  name: 'ready',
  async execute(bot) {
    await bot.user.setPresence({ activities: [{ name: 'Remade by QLF', type: 4 }], status: 'idle' });
  },
};