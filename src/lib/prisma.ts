// Database functionality temporarily disabled
const mockPrisma = {
  user: {
    findUnique: async () => null,
    create: async () => ({ id: 'mock', email: 'mock@example.com', createdAt: new Date() }),
    findFirst: async () => null,
  }
};

export default mockPrisma;