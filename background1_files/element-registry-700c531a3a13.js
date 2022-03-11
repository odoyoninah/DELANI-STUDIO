"use strict";(()=>{var j=Object.defineProperty;var h=(l,m)=>j(l,"name",{value:m,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[877],{98222:(l,m,n)=>{const o=new Map;function f(d){for(const s of o.keys())if(customElements.get(s)||d.querySelector(s)||d.matches(s)){for(const g of o.get(s)||[])g();o.delete(s)}}h(f,"scan");let P=!1;function y(){P=!0,f(document.body),new MutationObserver(s=>{if(!!o.size)for(const g of s)for(const v of g.addedNodes)v instanceof Element&&f(v)}).observe(document,{subtree:!0,childList:!0})}h(y,"prepare");function t(d,s){o.has(d)||o.set(d,[]),o.get(d).push(s),document.readyState==="interactive"||document.readyState==="complete"?P?f(document.body):y():document.addEventListener("DOMContentLoaded",y,{once:!0})}h(t,"whenSeen"),t("auto-playable",()=>n.e(2106).then(n.bind(n,72106))),t("launch-code",()=>n.e(4550).then(n.bind(n,44550))),t("metric-selection",()=>n.e(2715).then(n.bind(n,2715))),t("severity-calculator",()=>Promise.all([n.e(762),n.e(9355)]).then(n.bind(n,39355))),t("sku-list",()=>n.e(3787).then(n.bind(n,73787))),t("command-palette-page",()=>Promise.all([n.e(2403),n.e(7253),n.e(9368)]).then(n.bind(n,8291))),t("command-palette-page-stack",()=>Promise.all([n.e(2403),n.e(7253),n.e(1475)]).then(n.bind(n,1475))),t("command-palette-pjax-metadata",()=>n.e(7178).then(n.bind(n,97178))),t("readme-toc",()=>n.e(4415).then(n.bind(n,24415))),t("delayed-loading",()=>n.e(6672).then(n.bind(n,26672))),t("feature-callout",()=>n.e(3873).then(n.bind(n,3873))),t("reopen-button",()=>n.e(3217).then(n.bind(n,63217))),t("codespaces-policy-form",()=>n.e(9089).then(n.bind(n,39089))),t("action-list",()=>n.e(7412).then(n.bind(n,87412))),t("navigation-list",()=>n.e(8169).then(n.bind(n,58169))),t("iterate-focusable-elements.ts",()=>n.e(9281).then(n.bind(n,69281))),t("modal-dialog",()=>n.e(5095).then(n.bind(n,85095))),t("file-filter",()=>n.e(9636).then(n.bind(n,19636))),t("file-tree",()=>n.e(8184).then(n.bind(n,8184))),t("file-tree-toggle",()=>n.e(8174).then(n.bind(n,68174))),t("memex-project-picker",()=>n.e(7329).then(n.bind(n,27329))),t("project-picker",()=>n.e(9895).then(n.bind(n,9895))),t("monthly-spend-graph",()=>Promise.all([n.e(1949),n.e(3379)]).then(n.bind(n,23379))),t("profile-pins",()=>n.e(1071).then(n.bind(n,61071))),t("emoji-picker",()=>n.e(5810).then(n.bind(n,5810))),t("edit-hook-secret",()=>n.e(515).then(n.bind(n,90515))),t("insights-query",()=>n.e(9346).then(n.bind(n,39346))),t("remote-clipboard-copy",()=>Promise.all([n.e(762),n.e(907)]).then(n.bind(n,90907))),t("series-table",()=>n.e(8491).then(n.bind(n,28491))),t("line-chart",()=>n.e(9606).then(n.bind(n,79606))),t("bar-chart",()=>n.e(8175).then(n.bind(n,28175))),t("column-chart",()=>n.e(292).then(n.bind(n,80292))),t("stacked-area-chart",()=>n.e(9945).then(n.bind(n,9945))),t("presence-avatars",()=>n.e(3013).then(n.bind(n,43013))),t("pulse-authors-graph",()=>Promise.all([n.e(5489),n.e(4237)]).then(n.bind(n,94237))),t("stacks-input-config-view",()=>Promise.all([n.e(762),n.e(52),n.e(1997)]).then(n.bind(n,61997))),t("community-contributions-graph",()=>Promise.all([n.e(5489),n.e(4155)]).then(n.bind(n,64155))),t("discussion-page-views-graph",()=>Promise.all([n.e(5489),n.e(8703)]).then(n.bind(n,98703))),t("discussions-daily-contributors",()=>Promise.all([n.e(5489),n.e(7022)]).then(n.bind(n,87022))),t("discussions-new-contributors",()=>Promise.all([n.e(5489),n.e(4015)]).then(n.bind(n,94015))),t("code-frequency-graph",()=>Promise.all([n.e(5489),n.e(5194),n.e(7279)]).then(n.bind(n,7279))),t("contributors-graph",()=>Promise.all([n.e(5489),n.e(5194),n.e(6558),n.e(3428),n.e(3546)]).then(n.bind(n,93546))),t("org-insights-graph",()=>Promise.all([n.e(5489),n.e(5194),n.e(9677),n.e(3275)]).then(n.bind(n,73275))),t("traffic-clones-graph",()=>Promise.all([n.e(762),n.e(5489),n.e(5194),n.e(6663),n.e(8080)]).then(n.bind(n,68080))),t("traffic-visitors-graph",()=>Promise.all([n.e(762),n.e(5489),n.e(5194),n.e(6663),n.e(5028)]).then(n.bind(n,25028))),t("commit-activity-graph",()=>Promise.all([n.e(5489),n.e(5194),n.e(6558),n.e(8108)]).then(n.bind(n,88108))),t("marketplace-insights-graph",()=>Promise.all([n.e(5489),n.e(5194),n.e(6663),n.e(1132)]).then(n.bind(n,41132))),t("reload-after-polling",()=>n.e(2459).then(n.bind(n,82459))),t("package-dependencies-security-graph",()=>Promise.all([n.e(5489),n.e(9584)]).then(n.bind(n,89584))),t(".js-sub-dependencies",()=>n.e(9708).then(n.bind(n,9708))),t("network-graph",()=>n.e(853).then(n.bind(n,90853))),t("business-audit-log-map",()=>Promise.all([n.e(5489),n.e(6558),n.e(7280),n.e(6289),n.e(4686),n.e(6415)]).then(n.bind(n,86415)))}},l=>{var m=h(o=>l(l.s=o),"__webpack_exec__"),n=m(98222)}]);})();

//# sourceMappingURL=element-registry-b187d7acf878.js.map