# expo-app

Full-stack native app built with [Expo](https://expo.dev) SDK 55, targeting iOS.

## Stack

- **Expo SDK 55** with Expo Router (file-based routing)
- **React Native 0.83** + **React 19.2**
- **TypeScript** with strict mode
- Native tabs navigation with `@react-navigation/bottom-tabs`

## Getting Started

```bash
npm install
npx expo start
```

### Run on specific platforms

```bash
npm run ios      # iOS simulator (requires macOS + Xcode)
npm run android  # Android emulator
npm run web      # Web browser
```

## Project Structure

```
src/
├── app/           # File-based routes (Expo Router)
│   ├── _layout.tsx   # Root layout
│   ├── index.tsx     # Home tab
│   └── explore.tsx   # Explore tab
├── components/    # Reusable components
├── constants/     # Theme and config values
└── hooks/         # Custom React hooks
assets/            # Images, icons, fonts
```

## Building for iOS

```bash
npx eas build --platform ios
```

Requires an [Apple Developer Program](https://developer.apple.com/programs/) enrollment and [EAS CLI](https://docs.expo.dev/build/introduction/) setup.

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router docs](https://docs.expo.dev/router/introduction/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
