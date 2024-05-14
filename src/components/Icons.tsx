import { LucideProps, User } from "lucide-react";

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 1024 1024">
      <path d="M512 130.688a76.245333 76.245333 0 0 1 76.245333 76.288c0 28.16-15.232 52.992-38.101333 65.962667v48.426666h38.101333a266.922667 266.922667 0 0 1 266.922667 266.88h38.144a38.144 38.144 0 0 1 38.144 38.144v114.389334a38.144 38.144 0 0 1-38.144 38.144h-38.144v38.144a76.245333 76.245333 0 0 1-76.245333 76.245333H245.077333a76.245333 76.245333 0 0 1-76.288-76.245333v-38.144h-38.101333a38.144 38.144 0 0 1-38.144-38.144v-114.346667a38.144 38.144 0 0 1 38.144-38.186667h38.101333a266.922667 266.922667 0 0 1 266.922667-266.88h38.144V272.938667a75.648 75.648 0 0 1-38.144-65.962667A76.245333 76.245333 0 0 1 512 130.688m-171.605333 419.413333a95.317333 95.317333 0 0 0-95.317334 95.36 95.317333 95.317333 0 0 0 95.317334 95.317334 95.317333 95.317333 0 0 0 95.317333-95.317334 95.317333 95.317333 0 0 0-95.317333-95.317333m343.168 0a95.317333 95.317333 0 0 0-95.317334 95.317333 95.317333 95.317333 0 0 0 95.317334 95.317334 95.317333 95.317333 0 0 0 95.317333-95.317334 95.317333 95.317333 0 0 0-95.317333-95.317333z" />
    </svg>
  ),
};
