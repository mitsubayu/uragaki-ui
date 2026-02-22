# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-02-21

### Added

- Initial release of Uragaki UI component library
- 47 hand-drawn UI components built on shadcn/ui + rough.js
  - Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button
  - Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, ContextMenu
  - Dialog, Drawer, DropdownMenu, Form, HoverCard, Input, InputOTP
  - Label, MenuBar, NavigationMenu, Pagination, Popover, Progress, RadioGroup
  - Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider
  - Sonner (Toast), Switch, Table, Tabs, Textarea, Toggle, ToggleGroup, Tooltip
- `UragakiBorder` core wrapper component with rough.js SVG rendering
- `ThemeProvider` for dark/light mode support
- `useUragakiColors` hook for theme-aware color management
- Configurable `roughness` and `seed` props for hand-drawn styling
- oklch-based color system with CSS custom properties
- ESM-only library output with TypeScript declarations
- Storybook stories for key components
- Documentation site with component examples
