import {
  Text,
  VerticalStack,
  Image,
  HorizontalStack,
  VerticalStackProps,
} from "../atoms";

export interface FilterWrapperProps extends VerticalStackProps {
  title: string;
  icon?: string;
}

export function FilterWrapper({
  title,
  icon,
  children,
  ...props
}: FilterWrapperProps) {
  return (
    <VerticalStack p="2.3rem 1.6rem" {...props}>
      <HorizontalStack position="relative">
        <Text color="primary.light" fontSize="1.6rem" mr="auto">
          {title}
        </Text>
        {icon && <Image src={icon} alt="instant-icon" />}
      </HorizontalStack>
      {children}
    </VerticalStack>
  );
}
