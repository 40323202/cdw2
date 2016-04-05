var tipuesearch = {"pages":[{"url":"http://2015fallhw.github.io/cdw2/post/pages/about/","title":"About","text":"CDW2 gh-pages 網頁 CDW2 倉儲: https://github.com/2015fallhw/cdw2 線上分組程式: http://simpleflask-2014openshift.rhcloud.com/option","tags":"misc"},{"url":"http://2015fallhw.github.io/cdw2/post/user1-ce-shi-content-mu-lu-xia-de-md-dang-an-zhuan-huan.html","title":"user1-測試 content 目錄下的 md 檔案轉換","text":"網站類別分為 ag1~ag10, bg1~bg10, 與 MISC, 各組員必須透過 Leo Editor, Pelican, 與 Github pull requests 完成. CDW2 網頁: http://2015fallhw.github.io/cdw2/ 二甲文章類別: ag1~ag10 二乙文章類別: bg1~bg10 本網頁將 Pelican 設定分為本地端與 gh-pages 端的原因在於 disqus 設定, 本地端無需 disqus 討論功能, 而 gh-pages 端則需要網址全稱才能正確與 disqus 設定連結, 因此所有使用者在近端檢視時, 必須採用近端的按鈕, 而要送到遠端前則必須要用遠端按鈕產生所需要的 post 目錄下的所有資料後, 再提交推送. 以下為圖片引用方法, 建議放到 files 目錄下, 並且用相對目錄引用各自放在以用戶名稱命名的子目錄中, 以避免多用戶因採相同檔名而覆寫: 得到結果如下: 以下資料則從原先的 cdw2 gh-pages 分支中的 index.html 取出: cdw2 所在倉儲: https://github.com/2015fallhw/cdw2 以下繪圖由 s2a 的 g100 組所完成, 其中包括 s2b 的 g99 協同繪圖 (藍色零件). http://cdw2-ladisai.rhcloud.com/ag100/task2 以下則為4個零件中的第一個弧參數設定比較: 0(表示 x 軸轉角為0), 1(第一個選擇長度較大的弧), 0(且以右手向內畫弧) 0(表示 x 軸轉角為0), 0(第一個選擇長度較小的弧), 0(且以右手向內畫弧) 0(表示 x 軸轉角為0), 1(第一個選擇長度較大的弧), 1(且以右手向外畫弧) 0(表示 x 軸轉角為0), 0(第一個選擇長度較小的弧), 1(且以右手向外畫弧) http://cdw2-ladisai.rhcloud.com/bg99/fourchain Task1 相關: https://cmsimply-cadlab.rhcloud.com/get_page?heading=2016springCD 鍊條零件製造流程: 組立流程: 如何協同編輯 CDW2 gh-pages 網頁: 首先必須要認清的是 gh-pages 網頁位於 https://github.com/2015fallhw/cdw2 倉儲中的 gh-pages 分支, 與 master 分支中的資料不可弄混. CDW2 倉儲中的 master 分支中的資料為 Python3 wsgi 應用程式, 各組必須協同完成任務之後, 將 master 分支中的程式以 git remote add 的方式推送到各組的 OpenShift Python3 應用程式, 然後再將各組的應用程式連結與任務操作過程資料回報到 gh-pages 網頁. gh-pages 分支中各組分別使用 users 目錄下的 .md 檔, 以本地端按鈕產生本地端檢查用的網頁資料, 若沒有錯誤, 再提交推送到遠端, 若倉儲回應需要 pull 回資料, 一定要使用 git pull origin gh-pages 的方式, 明確取回 gh-pages 的分支合併, 若 content 目錄中的檔案能夠自動合併, 即可再用近端 Pelican 按鈕建立網頁資料, 檢查無誤後, 記得要再用遠端 Pelican 專用按鈕建立網頁後提交推送. 另外建議各組員在 content 目錄下建立文章標題時, 可以在標題最前方加上學號, 因為目前的設定會使用各 .md 檔案中的標題, 以拼音的方式建立對應的 html 網頁檔案, 假如有兩份 .md 檔案擁有相同的 Title, 則 Pelican 將會報錯, 一直到使用者修正後才能再正確進行 .md -> .html 檔案轉換的工作. 採用 pull requests 尋求 gh-pages 合併時, 因為網頁中的許多檔案都將產生衝突, 因此通常無法直接在 Github 中直接合併, 各組組長必須要根據系統的提示, 將資料拉到本地端後, 再視實際狀況處理 .md 的衝突 (千萬不要以手動處理 .html 檔案的衝突), 然後再用本地端按鈕建立網頁, 檢視無誤後再用遠端按鈕建立網頁資料後, 執行提交推送流程, 假如各組組長在處理衝突過程, 已經有其他組對遠端的倉儲版本進行更版, 則前述拉回處理衝突與合併的動作, 就必須再重複一遍. 祝大家協同愉快!!!","tags":"ag1"},{"url":"http://2015fallhw.github.io/cdw2/post/40323253scrum5-hui-bao-bg5-scrum5-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","title":"40323253scrum5-回報 bg5 scrum5 初步繪圖主機與連結","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","tags":"bg5"},{"url":"http://2015fallhw.github.io/cdw2/post/40323250scrum1-hui-bao-bg9-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","title":"40323250scrum1-回報 bg9 scrum1 初步繪圖主機與連結","text":"請注意: 這個 .md 檔案應該要放到 s2b/g9 目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg9 組員 40323250 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323250.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","tags":"bg9"},{"url":"http://2015fallhw.github.io/cdw2/post/40323204scrum1-hui-bao-bg5-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","title":"40323204scrum1-回報 bg5 scrum1 初步繪圖主機與連結","text":"請注意: 這個 .md 檔案應該要放到 s2b/g5 目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg5 組員 40323204 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323204.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","tags":"bg5"},{"url":"http://2015fallhw.github.io/cdw2/post/40323217scrum3-hui-bao-bg5-scrum3-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","title":"40323217scrum3-回報 bg5 scrum3 初步繪圖主機與連結","text":"ag100 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","tags":"bg5"},{"url":"http://2015fallhw.github.io/cdw2/post/scrum2-hui-bao-ag100-scrum2-yu-scrum1-hui-tu-jie-he.html","title":"scrum2-回報 ag100 scrum2 與 scrum1 繪圖結合","text":"ag100 組員 scrum2 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum2.leo 並且完成 Task1 的繪圖藍圖建立與註冊 已經將 scrum2 繪圖的部份納入, 並且塗上淡綠色: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum2_task1.py 中的 scrum2_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","tags":"ag100"},{"url":"http://2015fallhw.github.io/cdw2/post/scrum2-zai-ci-li-yong-pull-request-yao-qiu-he-bing-gh-pages-fen-zhi-zhong-de-gai-ban-zi-liao.html","title":"scrum2-再次利用 pull request 要求合併 gh-pages 分支中的改版資料","text":"假如各組員分別在各自同時段 fork 的版本持續工作, 則組長必須擔負以手動解決合併的工作 各組員在建立 pull request 時, 一定要確定 base fork 與 head fork 的對應分支, master 對 master, gh-pages 對 gh-pages, 而且基本的請求是要從 head fork 將版本要求合併到 base fork 中.","tags":"ag100"},{"url":"http://2015fallhw.github.io/cdw2/post/scrum2-xi-wang-cai-pull-request-fang-shi-he-bing-gh-pages-wang-ye-zi-liao.html","title":"scrum2-希望採 pull request 方式合併 gh-pages 網頁資料","text":"目前 scrum2 只能透過 pull request 將新版本資料合併到全班的 gh-pages 網頁, 這一篇就是希望測試流程中的實際操作步驟 以及組員與組長必須在流程中操作的步驟. 因為 gh-pages 中的 Pelican 靜態網頁可能無法直接在線上合併, 但是各用戶只要把握以 content 目錄中的 md 檔案為主, 而其他 post 目錄下的各 html 與頁面檔案, 都是從 .md 檔案與設定檔案, 透過 pelican 指令產生, 因此解決衝突的重點在 content 目錄中的 .md 檔案而非 post 目錄中的檔案.","tags":"ag100"},{"url":"http://2015fallhw.github.io/cdw2/post/40323206scrum2-lian-jie-ce-shi.html","title":"40323206scrum2-連結測試","text":"bg5組員scrum2已連上組別 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","tags":"bg5"},{"url":"http://2015fallhw.github.io/cdw2/post/scrum1-hui-bao-bg5-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","title":"scrum1-回報 bg5 scrum1 初步繪圖主機與連結","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","tags":"bg5"}]};