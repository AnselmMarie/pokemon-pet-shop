export const getPokeTypePrefixClass = (typeData: any[]) => {
  const typeName = typeData?.[0]?.type?.name;
  return `${typeName}Type`;
};
