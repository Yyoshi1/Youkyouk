export default async (req, res) => {
  const domainService = req.scope.resolve("domainService");
  const domains = await domainService.list();
  res.json({ domains });
};
