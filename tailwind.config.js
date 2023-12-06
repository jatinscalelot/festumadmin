/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        "10":['.625rem','.875rem'],
        "xs":['.75rem','1rem'],
        "sm":['.875rem','1.25rem'],
        "base":['1rem','1.5rem'],
        "lg":['1.125rem','1.625rem'],
        "xl":['1.25rem','1.75rem'],
        "22":['1.375rem','1.75rem'],
        "2xl":['1.5rem','1.875rem'],
        "28":['1.75rem','2.25rem'],
        "32":['2rem','2.5rem'],
        "44":['2.75rem','3.25rem'],
      },
      colors:{
        'primary':'#3062D4',
        'blue':'#20C0E8',
        'light':'#F9FAFB',
        'light_primary':'#EDF2FF',
        'dark':'#2D3643',
        'gray_1':'#8897AE',
        'gray_2':'#5E718D',
        'gray_3':'#AFBACA',
        'gray_4':'#E9EFF6',
        'gray_5':'#D7DFE9',
        'gray_6':'#F0F3F9',
        'gray_7':'#5E718D',
        'persion_green':'#0AB39C',
        'deep_green':'#097C69',
        'fire_opal':'#F06548',
        'light_green':"#E2F8F5",
        'dark_yellow':'#ECA926',
      },
      screens:{
        'x-xs': '450px',
        'sm'  : '640px',
        'md'  : '768px',
        'lg'  : '1024px',
        'xl'  : '1280px',
        '2xl' : '1536px',
      },
      boxShadow:{
        'one':'1px 6px 18px 0px rgba(175, 186, 202, 0.42)',
      }
    },
  },
  plugins: [],
}

