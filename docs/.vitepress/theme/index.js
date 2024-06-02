// https://vitepress.dev/guide/custom-theme
import {h, toRefs} from 'vue'
import DefaultTheme from 'vitepress/theme'
import {useData, useRoute} from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'

import './style.css'

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({app, router, siteData}) {
        // ...
    },
    setup() {
        const {frontmatter} = toRefs(useData());
        const route = useRoute();

        const members = [
            {
                avatar: 'https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/avatar.png',
                name: 'cbq1029',
                title: 'Creator',
                links: [
                    {icon: 'github', link: 'https://github.com/caobaoqi1029'},
                    {
                        icon: {
                            svg: '<svg t="1713342157310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1444" width="16" height="16"><path d="M512 960A448 448 0 1 1 512 64a448 448 0 0 1 0 896z m226.752-497.792H484.352a22.144 22.144 0 0 0-22.144 22.144v55.296c0 12.224 9.92 22.144 22.08 22.144h154.88c12.288 0 22.144 9.92 22.144 22.08v11.072c0 36.672-29.696 66.368-66.368 66.368H384.768a22.144 22.144 0 0 1-22.08-22.08V429.056c0-36.672 29.696-66.368 66.304-66.368h309.76c12.16 0 22.08-9.92 22.08-22.144v-55.296a22.144 22.144 0 0 0-22.08-22.144h-309.76a165.888 165.888 0 0 0-165.888 165.952v309.696c0 12.224 9.92 22.144 22.144 22.144h326.272a149.312 149.312 0 0 0 149.376-149.312V484.352a22.144 22.144 0 0 0-22.144-22.144z" fill="#C71D23" p-id="1445"></path></svg>',
                        }, link: 'https://gitee.com/caobaoqi'
                    },
                    {
                        icon: {
                            svg: '<svg t="1713342337553" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2496" width="16" height="16"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="2497"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="2498"></path></svg>',
                        }, link: 'https://space.bilibili.com/1045499440?spm_id_from=333.1007.0.0'
                    }
                ]
            },
        ]

        giscusTalk({
                repo: 'caobaoqi1029/qkxg-java-se',
                repoId: 'R_kgDOMDz2pQ',
                category: 'Announcements',
                categoryId: 'DIC_kwDOMDz2pc4Cfy8l',
                mapping: 'pathname',
                inputPosition: 'top',
                lang: 'zh-CN',
                theme: 'preferred_color_scheme',
                // ...
            }, {
                frontmatter, route
            },
            true
        );
    },
}
