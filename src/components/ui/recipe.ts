import { tv } from "tailwind-variants";
import { createStyleContext } from "@/lib/created-style-context";
import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";

export const buttonStyles = tv({
  base: "button",
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
  variants: {
    variant: {
      solid: "button--variant_solid",
      outline: "button--variant_outline",
      ghost: "button--variant_ghost",
      link: "button--variant_link",
    },
    size: {
      xs: "button--size_xs",
      sm: "button--size_sm",
      md: "button--size_md",
      lg: "button--size_lg",
      xl: "button--size_xl",
      "2xl": "button--size_2xl",
    },
  },
});

const styles = tv({
  base: "card",
  slots: {
    root: "card__root",
    header: "card__header",
    body: "card__body",
    footer: "card__footer",
    title: "card__title",
    description: "card__description",
  },
  variants: {},
});
const { withProvider, withContext } = createStyleContext(styles);

export const Root = withProvider(ark.div, "root");
export const Body = withContext(ark.div, "body");
export const Description = withContext(ark.p, "description");
export const Footer = withContext(ark.div, "footer");
export const Header = withContext(ark.div, "header");
export const Title = withContext(ark.h3, "title");

export type RootProps = ComponentProps<typeof Root>;
export interface BodyProps extends ComponentProps<typeof Body> {}
export interface DescriptionProps extends ComponentProps<typeof Description> {}
export interface FooterProps extends ComponentProps<typeof Footer> {}
export interface HeaderProps extends ComponentProps<typeof Header> {}
export interface TitleProps extends ComponentProps<typeof Title> {}
