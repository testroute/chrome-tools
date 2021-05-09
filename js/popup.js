new Vue({
    el: "#app",
    data() {
        return {
            msg: [],
            branchList: [],
            searchForm: {
                sys: '',
                userName: '',
                appId: '',
                appIdNew: '',
                phone: '',
                num: '',
                appName: '',
                branch: ''
            },
            nextBranch: [],
        }

    },
    methods: {
        //打开测试环境amp地址
        openUrl(urls) {
            window.open(urls.replace('10.16.244.131:8080', 'testapi-symphony.xxx.com'));
            console.log(urls)
        },
        //查询按钮
        query() {
            //console.log(this.searchForm.appName)
            var params = new URLSearchParams();
            params.append('sys', '');
            params.append('userName', '');
            params.append('appId', '');
            params.append('appName', this.searchForm.appName);
            let v = this;
            axios.post('https://testtoolapi-partner.xxx.com/release/queryApp', params)
                .then(function (response) {
                    v.msg = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        //发布
        quickRelease(appId, phone, upgradeType, num, gitUrl, appName, idx) {
            if (this.nextBranch[idx] == undefined) {
                alert("请先选择分支！")
            } else {
                var params = new URLSearchParams();
                params.append('appId', appId);
                params.append('num', num);
                params.append('phone', phone);
                params.append('branch', this.nextBranch[idx]);
                params.append('type', "test");
                axios.post('https://testtoolapi-partner.XXX.com/release/quickRelease', params)
                    .then(function (response) {
                        console.log(response.data.data)
                        alert(response.data.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        },
        getBranch(domain, idx) {
            console.log(domain)
            var params = new URLSearchParams();
            params.append('branch', domain);

            let v = this;
            axios.post('https://testtoolapi-partner.xxxF.com/release/getGitBranch', params)
                .then(function (response) {
                    v.branchList[idx] = response.data.data;
                    v.$forceUpdate();
                    console.log(v.branchList)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

    },
    mounted: function () {
        //this.showDetails();


    }
});