import styles from './styles.css';

// will be used to inject the equivalent of Core’s:
// $color--default-button
// background('btn')
//
// Usages in core not implemented yet:
// .btn:hover/:focus (for outline)
// .sp-modal-toggle__phone-wrapper::after
export var button = styles.Button;
export var colorCanvas = styles['Surface-colorCanvas'];

// will be used to inject the equivalent of Core’s:
// $color--page
// get-background-color('main')
// background('main')
// get-solid-background-color(x) (as a fallback for alpha colors)
//
// Usages in core not implemented yet:
// .skip-to-content
// .page-error
// .page-unsubscribe__content
// .full-page-overlay
export var colorSurfacePrimary = styles['Surface-colorSurfacePrimary'];

// will be used to inject the equivalent of Core’s:
// $color--sidebar
// get-background-color('sidebar')
// background('sidebar')
// same-palette('sidebar', x)
//
// Usages in core not implemented yet:
// .order-summary__scroll-indicator
export var colorSurfaceSecondary = styles['Surface-colorSurfaceSecondary'];
export var colorSurfaceTertiary = styles['Surface-colorSurfaceTertiary'];
export var utilityDefaultBorderColor = styles['Utility-defaultBorderColor'];
export var utilityDefaultTextColorSubdued = styles['Utility-defaultTextSubduedColor'];
export var utilityDefaultTextColorEmphasized = styles['Utility-defaultTextEmphasizedColor'];
export var utilityDefaultColorAccent = styles['Utility-defaultAccentColor'];