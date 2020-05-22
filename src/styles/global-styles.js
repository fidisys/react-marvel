import { createGlobalStyle } from 'styled-components';
// Abstracts
import * as palette from './variables';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');
  @-ms-viewport {
  width: device-width;
  }
  html {
  box-sizing: border-box;
  font-size: 13pt;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  }

  body {
  -ms-overflow-style: scrollbar;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  background-color: ${palette.APP_BACKGROUND_COLOR} !important;
  }

  html, body, #root {
  width: 100%;
  height: 100%;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }

  html, body, div, span, applet, object,
  iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
  pre, a, abbr, acronym, address, big, cite,
  code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b,
  u, i, center, dl, dt, dd, ol, ul, li, fieldset,
  form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption,
  footer, header, hgroup, menu, nav, output, ruby,
  section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: middle;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
  }

  ol, ul {
  list-style: none;
  }

  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
  content: none;
  }
  input::-moz-focus-inner {
  border: 0;
  padding: 0;
  }
  input, select, textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  }
  body, input, select, textarea, button {
  font-family: ${palette.FONT_FAMILY} !important;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.65;
  }
  section {
  position: relative;
  }
  a {
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  text-decoration: underline;
  }
  strong {
  font-weight: 600;
  }

  h1,h2,h3,h4,h5,h6 {
  line-height: 1.25;
  }

  h1 {
  font-size: 36px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 20px;
  }

  img {
    width: 100%;
  }

  p {
  font-size: 16px;
  line-height: 1.5;
  }

  .ant-btn {
    height: initial;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 15px;
  }
  .ant-btn-primary {
    background-color: ${palette.PRIMARY_DARK_COLOR} !important;
    border-color: ${palette.PRIMARY_DARK_COLOR} !important;
  }
  .ant-btn-dashed {
    color: ${palette.PRIMARY_COLOR};
    border-color: ${palette.PRIMARY_COLOR};
    &:hover {
      color: ${palette.PRIMARY_COLOR};
      border-color: ${palette.PRIMARY_COLOR};
    }
    &:active {
      color: ${palette.PRIMARY_COLOR};
      border-color: ${palette.PRIMARY_COLOR};
    }
    &:focus {
      color: ${palette.PRIMARY_COLOR};
      border-color: ${palette.PRIMARY_COLOR};
    }
  }

  .ant-form-item-control-wrapper {
    margin-left: 0px !important;
  }

  .ant-modal {
    width: initial !important;
    max-width: 350px !important;
    min-width: 300px;
  }
  .ant-modal-content {
    border-radius: 0px !important;
  }
  .ant-modal-body {
    padding: 0px !important;
  }
  .ant-select {
    width: 100% !important;
    max-width: 300px !important;
  }
  .ant-select-selection {
    min-height: 38px !important;
    padding: 4px 0px;
    &:focus {
      border-color: #4255B9 !important;
      box-shadow: none !important;
    }
    &:hover {
      border-color: #4255B9 !important;
    }
  }
  .ant-select-dropdown-menu-item {
    padding: 7px 14px !important;
  }
  .tags-selection {
    max-width: 100% !important;
  }
  .ant-tooltip {
    line-height: 1 !important;
  }
  .ant-tooltip-inner {
    min-height: 20px !important;
    font-size: 12px;
    font-weight: 600;
  }
  .ant-dropdown-menu-item {
    &:hover {
      background-color: #3b4ada14 !important;
    }
  }
  .ant-modal-header {
    background: initial !important;
    border-bottom: initial !important;
    .modal-title {
      font-size: 24px;
      color: #5860AF;;
      position: relative;
      padding-bottom: 12px;
      text-transform: capitalize;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 75px;
        height: 4px;
        border-radius: 2px;
        background-color: #CAC8F6;
        bottom: 0px;
        left: 5px;
      }
    }
  }
  .ant-modal-footer {
    padding: 16px 24px !important;
    border: initial !important;
  }

  .taskrating-card {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 0px 0px 20px;
    .taskrate-icon-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .taskrate-icon {
      width: 34px;
      margin-bottom: 5px;
  
    }
  }

  .ant-message {
    top: 0px !important;
    font-size: 14px !important;
    font-weight: 500;
    .ant-message-notice {
      margin: 0px !important;
      padding: 0px !important;
    }
    .ant-message-notice-content {
      width: 100%;
      padding: 0px;
    }
    .ant-message-custom-content {
      padding: 20px;
      &.ant-message-error {
        background-color: #D84A49;
        color: #fff;
        .anticon {
          color: #fff;
        }
      }
      &.ant-message-success {
        background-color: #2ECD71;
        color: #fff;
        .anticon {
          color: #fff;
        }
      }
      &.ant-message-warning {
        background-color: #ffb818;
        color: #fff;
        .anticon {
          color: #fff;
        }
      }
    }
  }

  .ripple-effect {
    position: relative !important;
    overflow: hidden !important;
    transform: translate3d(0, 0, 0) !important;
  }
  
  .ripple-effect:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .8s, opacity 1s;
  }
  .ant-steps-navigation {
    overflow: hidden;
  }
  .ant-drawer-close {
    border-radius: 100%;
    width: 70px !important;
    overflow: hidden;
  }
  .ant-drawer-close::after {
    display: none !important;
    content: "";
    position: absolute !important;
    border-radius: 50% !important;
    background-color: rgba(0, 0, 0, 0.1) !important;
    border: 0px solid #fff !important;
    width: 100px !important;
    height: 100px !important;
    margin-top: -50px !important;
    margin-left: -50px !important;
    
    /* Center the ripple */
    top: 50% !important;
    left: 50% !important;
  
    animation: ripple 1s;
    opacity: 0 !important;
  }
  .ant-drawer-close:focus:not(:active)::after {
    display: block !important;
  }
  
  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(10);
    }
  }
  
  .ripple-effect:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
  .ant-message-notice.move-up-leave.move-up-leave-active {
    overflow: hidden;
    -webkit-animation-name: MessageMoveOutCustom !important;
            animation-name: MessageMoveOutCustom !important;
    -webkit-animation-duration: 0.3s;
            animation-duration: 0.3s;
  }
  @-webkit-keyframes MessageMoveOutCustom {
    0% {
      max-height: 150px;
      padding: 0px;
      opacity: 1;
    }
    100% {
      max-height: 0;
      padding: 0;
      opacity: 0;
    }
  }
  @keyframes MessageMoveOutCustom {
    0% {
      max-height: 150px;
      padding: 0px;
      opacity: 1;
    }
    100% {
      max-height: 0;
      padding: 0;
      opacity: 0;
    }
  }
  .ant-pagination {
    .ant-pagination-item-active {
      border-color: #01B4E4;
      a {
        color: #01B4E4;
      }
    }
    .ant-pagination-item {
      &:hover {
        border-color: #01B4E4;
        a {
          color: #01B4E4;
        }
      }
    }
  }
  .ant-tooltip-inner {
    text-align: center !important;
    line-height: 1.5;
  }
  .ant-card-meta-description {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
  }
  .ant-drawer-title {
    font-weight: 600;
    font-size: 18px !important;
    .custom-title {
      display: flex;
      align-items: center;
      font-weight: bold;
      .anticon  {
        margin-right: 10px;
      }
    }
  }
  .ant-drawer-body {
    .ant-card {
      margin-bottom: 10px !important;
    }
    .ant-card-body {
      padding: 15px;
    }
  }
`;
