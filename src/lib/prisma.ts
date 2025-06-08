// Mock client for development
const mockPrisma = {
  user: {
    findUnique: () => Promise.resolve(null),
    create: () => Promise.resolve({ id: 'mock', email: 'mock@example.com' }),
    findFirst: () => Promise.resolve(null)
  }
};

export default mockPrisma;