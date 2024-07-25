// Type definitions for js-confetti
// TypeScript Version: 4.1.2

export default JSConfetti

interface IJSConfettiConfig {
    canvas?: HTMLCanvasElement,
}

interface IAddConfettiConfig {
    confettiRadius?: number,
    confettiNumber?: number,
    confettiColors?: string[],
    confettiPosition?: IPosition,
    confettiDirection?: TConfettiDirection,

    // emojis could be used as confetti
    // confettiColors will be ignored if emojis array provided
    emojis?: string[],
    emojiSize?: number,
}

declare class JSConfetti {
    constructor(jsConfettiConfig?: IJSConfettiConfig);

    addConfetti(confettiConfigs?: IAddConfettiConfig[]): Promise<void>;
    clearCanvas(): void;
    destroyCanvas(): void;
}
