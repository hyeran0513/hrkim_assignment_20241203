export interface TeamMember {
  name: string;
  role: string;
  description: string;
  profile: string;
}

export const teamData: TeamMember[] = [
  {
    name: "John Smith",
    role: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    profile: "/images/person-1.jpg",
  },
  {
    name: "Ann Brown",
    role: "Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    profile: "/images/person-2.jpg",
  },
  {
    name: "Mary Doe",
    role: "Programmer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    profile: "/images/person-3.jpg",
  },
];
