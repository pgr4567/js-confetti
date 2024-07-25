import { IAddConfettiConfig, INormalizedAddConfettiConfig } from './types'
import {
    INITIAL_SHAPE_RADIUS,
    INITIAL_EMOJI_SIZE,

    DEFAULT_CONFETTI_NUMBER,
    DEFAULT_EMOJIS_NUMBER,
    DEFAULT_CONFETTI_COLORS,
} from './consts'

function normalizeConfettiConfig(confettiConfig: IAddConfettiConfig): INormalizedAddConfettiConfig {
    const {
        confettiRadius = INITIAL_SHAPE_RADIUS,
        confettiNumber = (confettiConfig.emojis ? DEFAULT_EMOJIS_NUMBER : DEFAULT_CONFETTI_NUMBER),
        confettiColors = DEFAULT_CONFETTI_COLORS,

        emojis = [],
        emojiSize = INITIAL_EMOJI_SIZE,
    } = confettiConfig

    return { confettiRadius, confettiNumber, confettiColors, emojis, emojiSize }
}

export { normalizeConfettiConfig }
