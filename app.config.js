const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';
const getUniqueIdentifier = () => {
    if (IS_DEV) {
        return 'com.jethaha.stickersmash.dev';
    }

    if (IS_PREVIEW) {
        return 'com.jethaha.stickersmash.preview';
    }

    return 'com.jethaha.stickersmash';
};

const getAppName = () => {
    if (IS_DEV) {
        return 'StickerSmash (Dev)';
    }

    if (IS_PREVIEW) {
        return 'StickerSmash (Preview)';
    }

    return 'StickerSmash: Emoji Stickers';
};

export default ({ config }) => ({
    ...config,
    name: getAppName(),
    android: {
        ...config.android,
        package: getUniqueIdentifier(),
        versionCode: 1
    }
})