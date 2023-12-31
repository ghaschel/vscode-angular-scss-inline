// SYNTAX TEST "inline-style.ng"
import { Component } from '@angular/core';

@Component({
  selector: 'vscode-angular-scss-inline',
  style: `
    // General SCSS

    #test#{$test} {

    }

    .class-#{$variable} {

    }

    %placeholder {
      padding: 10px;
      color: red;
      transition: 0.2s ease-in-out color;

      flex: {
        grow: 0;
        shrink: 0;
        basis: 23%;
      }

      background: {
        image: url();
        position: absolute;
      }
    }

    custom-element {
      $baseColor: rgba(190, 0, 10, 0.3);
      $baseColor2: rgba(190, 0, 10, 0.3) !default;

      @use 'library' with (
        $black: #222,
        $border-radius: 0.1rem
      );

      @use 'sass:math' as math;

      @if $dark-theme {
        $primary-color: darken($primary-color, 60%);
        $accent-color: lighten($accent-color, 60%);
      }

      $theme-colors: (
        'success': #28a745,
        'info': #17a2b8,
        'warning': #ffc107,
      );

      .alert {
        background-color: map.get($theme-colors, 'warning');
      }

      @if $light-theme {
        background-color: $light-background;
        color: $light-text;
      } @else {
        background-color: $dark-background;
        color: $dark-text;
      }

      $sizes: 40px, 50px, 80px;

      @each $size in $sizes {
        .icon-#{$size} {
          font-size: $size;
          height: $size;
          width: $size;
        }
      }

      @each $name, $glyph, $size in $icons {
        .icon-#{$name}:before {
          display: inline-block;
          font-family: 'Icon Font';
          content: $glyph;
          font-size: $size;
        }
      }

      @for $i from 1 through 3 {
        ul:nth-child(3n + 1) {
          background-color: lighten($base-color, $i * 5%);
        }

        ul:nth-child(1) {
          background-color: lighten($base-color, $i * 5%);
        }

        ul:nth-child(3n) {
          background-color: lighten($base-color, $i * 5%);
        }

        ul:nth-child(3n + n) {
          background-color: lighten($base-color, $i * 5%);
        }

        ul:nth-child(3n + 1n) {
          background-color: lighten($base-color, $i * 5%);
        }
      }

      @function scale-below($value, $base, $ratio: 1.618) {
        @while $value > $base {
          $value: math.div($value, $ratio);
        }
        @return $value;
      }

      @forward 'src/list';

      @forward 'src/list' as list-*;

      @use 'bootstrap';

      li {
        @include bootstrap.list-reset;
      }

      @mixin rtl($property, $ltr-value, $rtl-value) {
        #{$property}: $ltr-value;

        [dir='rtl'] & {
          #{$property}: $rtl-value;
        }
      }

      s .sidebar {
        @include rtl(float, left, right);
        @include test(red, rgba(0, 0, 0, 0.1));
      }

      @at-root #{selector.unify(&, $child)} {
        @content;
      }

      @media screen and (min-width: 400px) {
        body {
          background-color: lightgreen;
        }
      }

      @media screen and (min-width: 800px) {
        body {
          background-color: lavender;
        }
      }

      @media print {
        .page {
          width: 8in !important;

          @at-root (without: media) {
            color: #111;
          }

          @at-root (with: rule) {
            font-size: 1.2em;
          }
        }
      }

      .example {
        content: #{'string'};
      }

      .error {
        border: 1px #f00;
        background-color: #fdd;

        &--serious.test {
          @extend .error;
          border-width: 3px;
        }

        @error "Property #{$property} must be either left or right.";
        @warn "Unknown prefix #{$prefix}.";
        @debug 'divider offset: #{$divider-offset}';
      }
    }

    // General CSS

    custom-element {
      #id {
      }
      &#id {
      }
      .class {
      }
      &.class {
      }
      & > .child {
      }
      & + .child {
      }
      & ~ .child {
      }
      &[type='text'] {
      }
      a[href*='https'] {
      }
      a[href$='.org'] {
      }
      a[class~='logo'] {
      }
      a[class|='@@@@@@@test'] {
      }
      a[class^='test'] {
      }
      a[href*='insensitive' i] {
      }
      a[href*='cAsE' s] {
      }
      a[href^='https'][href$='.org'] * {
      }
      multiple,
      elements {
      }
      multiple,
      elements {
      }
      element .generalchild {
      }
      col.selected||.test {
      }
      @supports (display: grid) {
      }
      @supports not (display: grid) {
      }
      @supports selector(A > B) {
      }
      @supports not (not (transform-origin: 2px)) {
      }
      @supports (display: grid) and (not (display: inline-grid)) {
      }
      @scroll-timeline moveTimeline {
        source: auto;
        orientation: vertical;
        scroll-offsets: selector(#myElement) start 0, selector(#myElement) end 0;
      }
      @page {
      }
      @page :blank {
      }
      @page :left {
      }
      @page :right {
        margin: 0;
      }
      @page :first {
      }
      @page :recto {
      }
      @page :verso {
      }
      @namespace url(XML-namespace-URL);
      @namespace 'XML-namespace-URL';
      @namespace prefix url(XML-namespace-URL);
      @namespace prefix 'XML-namespace-URL';
      @namespace url(http://www.w3.org/1999/xhtml);
      @namespace svg url(http://www.w3.org/2000/svg);

      @import url('fineprint.css') print;
      @import url('bluish.css') print, screen;
      @import 'common.css' screen;
      @import url('landscape.css') screen and (orientation: landscape);
      @import url('narrow.css') supports(display: flex) screen and (max-width: 400px);
      @import url(headings.css) layer(default);
      @import url(links.css) layer(default);
      @media screen and (min-width: 900px) {
      }

      @layer layer-name {
        padding: 10px;

        @layer layer {
          padding: 0;
        }
      }

      @layer layer-name {
      }

      @layer layer-name, layer-name, layer-name {
      }

      @layer {
        .box p {
          padding: 0;
        }
      }

      @layer default {
        audio[controls] {
          display: block;
        }
      }

      @charset "utf-8";

      @counter-style thumbs {
        system: cyclic;
        symbols: '\1F44D';
        suffix: ' ';
      }

      @color-profile --variable {
        src: url('test');
      }

      @document url("http://www.w3.org/"),
              url-prefix("http://www.w3.org/Style/"),
              domain("mozilla.org"),
              media-document("video"),
              regexp("https:.*") {
        // this was deprecated but some browsers still support it
        h1 {
        }
      }

      @keyframes slidein {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(100%);
        }
      }

      @font-face {
        font-family: 'Open Sans';
        src: url('/fonts/OpenSans-Regular-webfont.woff2') format('woff2'),
          url('/fonts/OpenSans-Regular-webfont.woff') format('woff');
      }

      .header {
        background-color: color(--swop5c 0% 70% 20% 0%);
      }

      @font-feature-values "Font Two" {
        @swash {
        }

        @styleset {
        }
      }
    }

    // CSS Houdini API

    custom-element {
      @property --property-name {
        syntax: '<color>';
        name: '--my-color';
        initialvalue: '#c0ffee';
        inherits: false;
      }
    }

    // Pseudo Elements

    custom-element {
      &::after {
      }
      &::backdrop {
      }
      &::before {
      }
      &::cue {
      }
      &::cue(element) {
      }
      &::cue-region {
      }
      &::cue-region(element) {
      }
      &::first-letter {
      }
      &::first-line {
      }
      &::file-selector-button {
      }
      &::grammar-error {
      }
      &::marker {
      }
      &::part(tab) {
      }
      &::placeholder {
      }
      &::selection {
      }
      &::shadow {
      }
      &::slotted(span) {
      }
      &::spelling-error {
      }
      &::target-text {
      }
    }

    // Pseudo Classes

    custom-element {
      &:after {
      } //wrong but widely accepted
      &:before {
      } //wrong but widely accepted
      &:first-letter {
      } //wrong but widely accepted
      &:first-line {
      } //wrong but widely accepted
      &:active {
      }
      &:any-link {
      }
      &:autofill {
      }
      &:blank {
      }
      &:checked {
      }
      &:default {
      }
      &:defined {
      }
      &:dir(rtl) {
      }
      &:disabled {
      }
      &:empty {
      }
      &:enabled {
      }
      &:first {
      }
      &:first-child {
      }
      &:first-of-type {
      }
      &:focus {
      }
      &:focus-visible {
      }
      &:focus-within {
      }
      &:fullscreen {
      }
      &:has(+ p) {
      }
      &:host {
      }
      &:host(.special-element) {
      }
      &:host-context(html.dark-theme) {
      }
      &:hover {
      }
      &:in-range {
      }
      &:indeterminate {
      }
      &:invalid {
      }
      &:is(header, main, footer, custom.test) {
      }
      &:matches(header, main, custom.test) {
      }
      &:any(header, main, custom.test) {
      }
      &:lang(en-US) {
      }
      &:-ms-lang(en-US) {
      }
      &:last-child {
      }
      &:last-of-type {
      }
      &:left {
      }
      &:link {
      }
      &:modal {
      }
      &:not(customelement, .test) {
      }
      &:nth-child(-n + 3) {
      }
      &:nth-last-child(3n + 3) {
      }
      &:nth-last-of-type(-n + 3) {
      }
      &:nth-of-type(-n + 3) {
      }
      &:only-child {
      }
      &:only-of-type {
      }
      &:optional {
      }
      &:out-of-range {
      }
      &:paused {
      }
      &:picture-in-picture {
      }
      &:placeholder-shown {
      }
      &:playing {
      }
      &:read-only {
      }
      &:read-write {
      }
      &:required {
      }
      &:right {
      }
      &:root {
      }
      &:scope {
      }
      &:target {
      }
      &:user-invalid {
      }
      &:-moz-ui-invalid {
      }
      &:user-valid {
      }
      &:-moz-ui-valid {
      }
      &:valid {
      }
      &:visited {
      }
      &:where(section.with-class, another-component.class) {
      }
    }

    // Angular-Specific selectors

    custom-element {
      ::ng-deep {
      }
      >>> {
      }
      /deep/ {
      }
    }

    // XML Namespaces

    custom-element {
      @namespace svg 'http://www.w3.org/2000/svg';

      a {
        text-decoration: underline;
        color: purple;
      }

      svg|a {
        stroke: purple;
      }

      svg|* {
        mix-blend-mode: multiply;
      }

      @namespace xl 'http://www.w3.org/1999/xlink';

      [xl|href] {
        fill: orange;
      }

      [href] {
        fill: gold;
      }

      svg|.test,
      svg|#test,
      svg|[test]

      [xl|href$='.pdf'],
      xl|[al|href$='.pdf'] {
        text-transform: uppercase;
      }

      [*|href$='.pdf'] {
        text-transform: uppercase;
      }
      @namespace ink 'http://www.inkscape.org/namespaces/inkscape';

      [inkscape\:groupmode='layer'],
      [ink|groupmode='layer'] {
        isolation: isolate;
      }

      *|*.special {
        font-family: 'fantasy';
      }
    }

    .test {
      &-#{$size} {} //<-- wrong color
      &#{$size} {} // <-- correct color
      &y-#{$size} { // <-- correct color
        margin-top: #{$size}px; <-- px has wrong color
      }
    }
  `,
  template: `<div *ngContainer=""></div>`,
})
export class VscodeAngularInline {}
