import { styled } from "@mui/material";
import { Text, VerticalStack, VerticalStackProps } from "../atoms";

export interface FilterOptionProps extends VerticalStackProps {
  name: string;
  desc: string;
  active: boolean;
}

const StyledFilterOption = styled(VerticalStack, {
  shouldForwardProp: (propName) => propName !== "active",
})<{ active: boolean }>(({ active }) => ({
  border: "0.2rem solid",
  borderRadius: "0.8rem",
  padding: "1.1rem 1.2rem",
  maxWidth: "15.6rem",
  justifyContent: "center",
  gap: "0.4rem",
  borderColor: active ? "#119383" : "#EDEAE3",
  "&:hover": {
    borderColor: "#119383",
    cursor: "pointer",
  },
}));

export function FilterOption({ name, desc, ...props }: FilterOptionProps) {
  return (
    <StyledFilterOption {...props}>
      <Text color="primary" fontSize="1.6rem">
        {name}
      </Text>
      <Text color="primary.light" fontSize="1.2rem">
        {desc}
      </Text>
    </StyledFilterOption>
  );
}
