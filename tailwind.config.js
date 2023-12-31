/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "green": "#00A884",
      "body": "#DCDEDD",
      "main": "#ffffff",
      "headers": "#f0f2f5",
      "cont-border": "#E9EDEF",
      "left-header-profile": "#008069",
      "left-header-profile-icons": "#8696A0",
      "left-header-community-text": "#111B21",
      "left-header-nav-icons": "#3e506f",
      "left-header-nav-icons-hover": "#D9DBDE",
      "left-header-menu-text": "#3B4A54",
      "left-header-menu-text-hover": "#F5F6F6",
      "left-notif-box": "#53BDEB",
      "left-chatlist-box-details": "#aaa",
      "left-chatlist-box-message": "#06e744",
      "left-chatlist-box-text": "#111B21",
      "right": "#EFEAE2",
      "right-chatcontainer": "#dcf8c6",
      "right-chat-box-input": "#f0f0f0",
      "right-chat-box-input-icon": "#515855",
      "status-left": "#1E262C",
      "status-left-line": "#4B5156",
      "status-left-text": "#B6B9BA",
      "status-time": "#95999C",
      "status-contact-hover": "#30373C",
      "status-right": "#0B141A",
      "status-right-icon": "#54656f",
      "status-right-text": "#8C9093",
      "landing": "#f0f2f5",
      "landing-title": "#41525D",
      "landing-text": "#667781",
      "landing-icon": "#8696A0",
      'tea-green': {
        150: '#dcf8c6',
      },
    },
    minWidth: {
      "20": "20px",
      "40": "40px",
    },
    minHeight: {
      "20": "20px",
      "1.47": "1.47em",
      "52": "52px",
    },
    maxHeight: {
      "7.35": "7.35em",
    },
  },
  plugins: [],
}

