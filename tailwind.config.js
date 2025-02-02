/** @type {import('tailwindcss').Config} */
// export default {
//     content: ["./index.html",


//         "./src/**/*.{js,ts,jsx,tsx}",
//         "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",


//     ],
//     theme: {
//         extend: {
//             fontFamily: {
//                 sans: ['Roboto Slab', 'sans-serif'],
//             },

//         },
//     },
//     plugins: [],

// }
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto Slab', 'sans-serif'],
            },
            colors: {
                'button': '#EE0C35'

            },
            boxShadow: {
                'custom-card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            },
            borderWidth: {
                '1': '1px', // Tạo thêm border 1px tùy chỉnh
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                }
            },
        },
    },
    plugins: [],
});