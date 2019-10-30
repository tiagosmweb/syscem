export default {
    port: process.env.PORT || 3000,
    folderStorage: process.env.URL_STORAGE || "./storage",
    pictureQuality: process.env.PICTURE_QUALITY || 80,
    secretyKey: process.env.SECRETYKEY || 'fe1aed9c-1084-4fea-80bd-68e26bebcc81',
    publicRoutes: process.env.PUBLICROUTES || [
        'users/create',
        'users/auth',
        'planta/create',
        'storage'
    ]
} 