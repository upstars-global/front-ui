import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';

declare const __VLS_component: DefineComponent<ButtonProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
click: (value: MouseEvent) => any;
}, string, PublicProps, Readonly<ButtonProps> & Readonly<{
onClick?: ((value: MouseEvent) => any) | undefined;
}>, {
size: ButtonSize;
type: ButtonType;
color: ButtonColor;
variant: ButtonVariant;
buttonType: "submit" | "button";
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ButtonSlots> & ButtonSlots;
    refs: {};
    rootEl: HTMLButtonElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const addIcon: (name: string, icon: string) => void;

export declare const addIcons: (iconsSet: Record<string, string>) => void;

declare type ButtonColor = keyof typeof ButtonColors;

declare enum ButtonColors {
    primary = "primary",
    neutral = "neutral",
    destructive = "destructive"
}

declare interface ButtonProps {
    color?: ButtonColor;
    variant?: ButtonVariant;
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    fullWidthMobile?: boolean;
    leadingIcon?: string;
    trailingIcon?: string;
    icon?: string;
    label?: string;
    caption?: string;
    uppercase?: boolean;
    initialCase?: boolean;
    buttonType?: 'submit' | 'button';
}

declare type ButtonSize = keyof typeof ButtonSizes;

declare enum ButtonSizes {
    lg = "lg",
    md = "md",
    sm = "sm"
}

declare interface ButtonSlots {
    default(): unknown;
    caption(): unknown;
}

declare type ButtonType = keyof typeof ButtonTypes;

declare enum ButtonTypes {
    standard = "standard",
    icon = "icon",
    caption = "caption",
    slab = "slab",
    action = "action"
}

declare type ButtonVariant = keyof typeof ButtonVariants;

declare enum ButtonVariants {
    filled = "filled",
    outline = "outline",
    soft = "soft",
    ghost = "ghost"
}

export declare interface IconProps {
    name?: string;
    src?: string;
    size?: IconSize;
}

declare type IconSize = '16' | '20' | '24' | '32' | '40' | '48' | 'full';

export declare const UiButton: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare const UiIcon: DefineComponent<IconProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IconProps> & Readonly<{}>, {
size: IconSize;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export { }
