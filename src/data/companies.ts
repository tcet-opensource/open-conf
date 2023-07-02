export interface Company {
  logo: string;
  url: string;
  name: string;
  aspectRatio: number;
  width: number;
}

const companies: Company[] = [
  {
    name: "FOSS UNITED",
    url: "https://fossunited.org/",
    logo: "/companies/foss_united.jpg",
    width: 202,
    aspectRatio: 1.28
  },
];

export function findCompany(id: string) {
  const company = companies.find((company) => company.name === id);
  if (!company) return null;
  else return company;
}
