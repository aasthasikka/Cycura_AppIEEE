import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "./utils";

/* -------------------------------------------------------------------------- */
/*                               ROOT COMPONENT                               */
/* -------------------------------------------------------------------------- */

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "relative z-50 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   LIST                                     */
/* -------------------------------------------------------------------------- */

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "flex list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                                   ITEM                                     */
/* -------------------------------------------------------------------------- */

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                                  TRIGGER                                   */
/* -------------------------------------------------------------------------- */

const navigationMenuTriggerStyle = cva(
  "inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
);

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="ml-1 h-3 w-3 transition-transform data-[state=open]:rotate-180"
        aria-hidden
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  CONTENT                                   */
/* -------------------------------------------------------------------------- */

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "absolute left-0 top-full mt-2 rounded-md border bg-popover p-2 shadow-md",
        className
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                                  VIEWPORT                                  */
/* -------------------------------------------------------------------------- */

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute left-0 top-full flex w-full justify-center">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full max-w-md overflow-hidden rounded-md border bg-popover shadow-md",
          className
        )}
        {...props}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              LINK (FIXED)                                  */
/* -------------------------------------------------------------------------- */

function NavigationMenuLink({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <NavigationMenuPrimitive.Link asChild>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "flex w-full cursor-pointer select-none flex-col rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className
        )}
      >
        {children}
      </button>
    </NavigationMenuPrimitive.Link>
  );
}

/* -------------------------------------------------------------------------- */
/*                                INDICATOR                                   */
/* -------------------------------------------------------------------------- */

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-10 flex h-2 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="h-2 w-2 rotate-45 bg-border shadow" />
    </NavigationMenuPrimitive.Indicator>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                  */
/* -------------------------------------------------------------------------- */

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuLink,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
};
