import {} from 'emotion-theming';
import React, { FC } from 'react';

// loosely based on flutter theme
// https://api.flutter.dev/flutter/material/ThemeData-class.html

export type ColorScheme = {
    primary: string,
    primaryVariant: string,
    secondary: string,
    secondaryVariant: string,
    surface: string,
    background: string,
    error: string,
    onPrimary: string,
    onSecondary: string,
    onSurface: string,
    onBackground: string,
    onError: string,
};

export type Color = keyof ColorScheme;


export type GrayScale = {
    50: string;
    75: string;
    100: string;
    200: string;
    250: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;    
}

export const gray: GrayScale = {
    50: '#fafafa',
    75: '#f8f8f8',
    100: '#efefef',
    200: '#E0E0E0',
    250: '#dcdcdc',
    300: '#c6c6c6',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#4a4a4a',
    900: '#212121',
};

export  const DefaultLightColorScheme: ColorScheme = {
    primary: '#6200ee',
    primaryVariant: '#3700b3',
    secondary: '#03dac6',
    secondaryVariant: '#018786',
    surface: 'white',
    background: 'white',
    error: '#b00020',
    onPrimary: 'white',
    onSecondary: 'black',
    onSurface: 'black',
    onBackground: 'black',
    onError: 'white',
};

export const DefaultDarkColorScheme: ColorScheme = {
    primary: '#bb86fc',
    primaryVariant: '#3700B3',
    secondary: '#03dac6',
    secondaryVariant: '#03dac6',
    surface: '#121212',
    background: '#121212',
    error: '#cf6679',
    onPrimary: 'black',
    onSecondary: 'black',
    onSurface: 'white',
    onBackground: 'white',
    onError: 'black',
};

const AppColorScheme: ColorScheme = {
    ...DefaultLightColorScheme,
    surface: '#fcfcfc',
    onSurface: gray[600],
}

export interface Theme {
    accentColor: string,
    backgroundColor: string,
    buttonColor: string,
    canvasColor: string,
    cardColor: string,
    colorScheme: ColorScheme,
    cursorColor: string,
    disabledColor: string,
    dividerColor: string,
    errorColor: string,
    focusColor: string,
    highlightColor: string,
    hintColor: string,
    hoverColor: string,
    indicatorColor: string,
    primaryColor: string,
    primaryColorDark: string,
    primaryColorLight: string,
    scaffoldBackgroundColor: string, // The background color for a typical material app or a page within the app. 
    selectedRowColor: string,
}

const DefaultTheme: Theme = {
    accentColor: AppColorScheme.onSecondary,
    backgroundColor: AppColorScheme.onPrimary, // or background?
    buttonColor: AppColorScheme.primary,
    canvasColor: AppColorScheme.surface, // todo: maybe a little lighter then scaffold?
    cardColor: AppColorScheme.surface,
    colorScheme: AppColorScheme,
    cursorColor: AppColorScheme.primary,
    disabledColor: gray[200],
    dividerColor: gray[400],
    errorColor: 'red',
    focusColor: 'blue',
    highlightColor: AppColorScheme.secondary,
    hintColor: gray[300],
    hoverColor: gray[500], // not sure abobut this
    indicatorColor: AppColorScheme.secondary,
    primaryColor: AppColorScheme.primary,
    primaryColorDark: AppColorScheme.primary, // todo: change
    primaryColorLight: AppColorScheme.primary, // todo
    scaffoldBackgroundColor: AppColorScheme.background,
    selectedRowColor: gray[500],
}

export const AppTheme: Theme = {
    ...DefaultTheme,
};

