import { Box, Image } from "../atoms";
import Logo from "../../../assets/PragueLabslogo.svg";

export function Header() {
  return (
    <Box component="header" p="2.2rem" position="relative">
      <Image src={Logo} width="200" height="35" alt="header-logo" />
    </Box>
  );
}
