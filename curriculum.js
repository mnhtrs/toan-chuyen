// ============================================================
// DỮ LIỆU CHƯƠNG TRÌNH HỌC - TOÁN CHUYÊN
// ============================================================
// Cấu trúc: Mỗi lesson có thể có:
//   - yt: YouTube video ID
//   - gd: Google Drive file ID
//   - bunny: Bunny CDN path "account/video-id"
//   - url: external URL
//   - homework: { gd, yt, bunny, url } — bài tập về nhà đi kèm

const curriculumData = [
  {
    section: "Đại số",
    color: "#4A90D9",
    icon: "fa-calculator",
    chapters: [
      {
        title: "CHƯƠNG 1: PHƯƠNG TRÌNH, BẤT PHƯƠNG TRÌNH VÀ HỆ PHƯƠNG TRÌNH",
        lessons: [
          { title: "Bài 1: Phương trình tích, phương trình chứa ẩn ở mẫu", yt: "TPWiZk80RR4", homework: { gd: "1QVhm7witY2dz7QVc5yaxo4wA5gBDYivi" } },
          { title: "Bài 2: Bất phương trình", yt: "d1xpSC4sXHQ", homework: { yt: "l3PdjpxZmiU", gd: "1UOlk9HFHLnRAQYg6TGX-pJshVoj0VpOc" } },
          { title: "Bài 3: Hệ phương trình", yt: "t2ozCdL2F0s", homework: { gd: "1J8E5swG4n2OTOrRaq7gCXzk0qW_3YskU" } },
          { title: "Bài 4: Hệ phương trình có chứa tham số", yt: "nuaDjdeHZRY", homework: { yt: "k72hb1_zCF4" } },
          { title: "Bài 5: Giải bài toán bằng cách lập hệ phương trình", yt: "fhgwrf4XLHw", homework: { gd: "1HRehTo6wDVRcCQEJLu1wwiH1Qj_K_6vX" } },
        ]
      },
      {
        title: "CHƯƠNG 2: CĂN BẬC HAI - CĂN BẬC BA",
        lessons: [
          { title: "[Bổ trợ] B1. Căn bậc hai - Căn thức bậc hai", yt: "Mv8huih6twM" },
          { title: "[Bổ trợ] B2. Căn bậc hai của tích - thương", yt: "98mrUKuy1Ys" },
          { title: "[Bổ trợ] B3. Khử mẫu chứa căn và trục căn thức ở mẫu", yt: "3BVVH7IFhdg" },
          { title: "Bài 1: Căn bậc hai - Căn bậc ba", yt: "ZBvoGsLgAeM", homework: { gd: "1e_s2x98mJFXQn_fxwJ_iTm0j5uZch901" } },
          { title: "Bài 2: Biểu thức chứa căn bậc hai", yt: "dveB0Ixp0XQ", homework: { gd: "1MoplgG_ym7YqUHOUJChtSjCFZ3KJDXDY", yt: "M78vifV-7Sc" } },
          { title: "Bài 3: Rút gọn và tính giá trị biểu thức [1-8]", yt: "cQPbCcYBfcI" },
          { title: "Bài 3: Rút gọn và tính giá trị biểu thức [11-17]", yt: "LMpuS__oZkM" },
          { title: "Bài 4.1: Giải phương trình vô tỉ cơ bản", yt: "oXqymzAGrho" },
          { title: "Bài 4.2: Bất phương trình", yt: "PAqw_hU8a4Q" },
          { title: "Bài 4.3: So sánh", yt: "25xoA0XqatQ" },
          { title: "Bài 4: Phương trình, bất phương trình, so sánh", homework: { gd: "1JS3Q-dcfARlBG9nhLsuDZJGWPs8T3GM-" } },
          { title: "Bài 5: Tìm GTLN, GTNN", yt: "-n2dwmaq_xg", homework: { gd: "1XY5_GbYYOIzplR2ye0fkAig7krdJUCTk" } },
          { title: "Bài 6.1: Tìm x để biểu thức nhận giá trị nguyên", yt: "G3Mh2kPnNhc" },
          { title: "Bài 6.2: Bài toán có tham số m", yt: "NiM8m_Bl4fE" },
          { title: "Bài 6: Biểu thức nguyên, tham số", homework: { gd: "1_6GjkX1s5N7ho9Di49Zfp-MJ1No4RYUr" } },
        ]
      },
      {
        title: "CHƯƠNG 3: PHƯƠNG TRÌNH VÔ TỈ",
        lessons: [
          { title: "Bài 1: Phương pháp nâng lên lũy thừa", yt: "S565TSlFunk", homework: { gd: "18l9J8gO2w8e3bI_OXNX3LI2v1tmcTn5n" } },
          { title: "Bài 2: Phương pháp liên hợp", yt: "JwLGMiC-B0c", homework: { gd: "19OCXOWdpqevSER6JKpe7eCmsa0ic83Uf" } },
          { title: "Bài 3: Phương pháp đặt ẩn phụ (phần 1)", yt: "RXphb2sG8Dk", homework: { gd: "1hv1rFVT_M8eikMfQp2jnskUTAW1s3i-_" } },
          { title: "Bài 4: Phương pháp đặt ẩn phụ (phần 2)", yt: "YoNbgSbfhGY", homework: { gd: "1aJWd5scJYiAZth1okoVVy3jRiuCQRxgY" } },
          { title: "Bài 5: Phương pháp đánh giá", yt: "eT3LUgcwj5s", homework: { gd: "1IVw6jC2RRwxLHzBs_fWq1nIh7RT1M9MX" } },
        ]
      },
      {
        title: "CHƯƠNG 4: HỆ PHƯƠNG TRÌNH",
        lessons: [
          { title: "Bài 1: Hệ đối xứng", bunny: "592871/5ae0b654-24a8-4fe8-a5d0-dd2c926294df", homework: { gd: "1GYB8We3xKU743JIkbMZonhKX4lSRDUSt" } },
          { title: "Bài 2: Hệ đẳng cấp, hệ 3 ẩn", bunny: "592871/a9bde0d1-ae84-4428-9ec5-da9c55918797", homework: { gd: "1AOdXL4hzYLt5AJzzjfj4AnDfA1IGkAJX" } },
          { title: "Bài 3: Phương pháp biến đổi tương đương", bunny: "592871/316908da-63c0-4897-8575-0afb78f150b6", homework: { gd: "1x-MwLxm6P5qJ4f3ymtWW4YMzX2yAtph8" } },
          { title: "Bài 4: Phương pháp đặt ẩn phụ", bunny: "592871/d270e6e0-a350-401b-aa56-05ca87e6f11d", homework: { gd: "1gtY6nATYDI8HaSeH5IueBySX32xlrfOL" } },
          { title: "Bài 5: Đặt ẩn phụ đưa về hệ phương trình", yt: "9BZH6omGSXQ" },
        ]
      },
      {
        title: "CHƯƠNG 5: BẤT ĐẲNG THỨC",
        lessons: [
          { title: "[Bổ trợ] PP biến đổi tương đương, bổ đề quan trọng", yt: "EoDAzsJKMKs" },
          { title: "[Bổ trợ] Các bất đẳng thức cổ điển", yt: "W3CHLkWwEr4" },
          { title: "[Bổ trợ] Kỹ thuật chọn điểm rơi", yt: "u5247SXQDpM" },
          { title: "[Bổ trợ] Kỹ thuật chọn điểm rơi (Live chữa)", yt: "vwJEfB3Lmtk" },
          { title: "Bài 1: Kỹ thuật đánh giá từ AM sang GM", bunny: "579455/6f9fcb4f-bfe9-4796-9cd1-d20894223fee", homework: { gd: "1gZATGZcjTH2BpblQrKXT1Ph25oo_P-3D" } },
          { title: "Bài 2: Kỹ thuật đánh giá từ GM sang AM", bunny: "579455/6515e938-cfce-49cf-b947-8ef3ebc2e927", homework: { gd: "1YsMBvX-nt7angkLQEXIyskrMB-k60ans" } },
          { title: "Bài 3: Kỹ thuật chọn điểm rơi", bunny: "579455/bfa4b3d5-703b-4a32-bdb8-01b764ae8728", homework: { gd: "1bki4fX2Tk_aTEC4qj23Wy9T1nhexE7La" } },
          { title: "Bài 4: Kỹ thuật ghép cặp, thêm bớt", bunny: "579455/a5498dfc-448b-4475-89ba-f4ca1d62511a", homework: { gd: "1IQMZyvPGPoqgz1-yKckw_MjfJJXAYbol" } },
          { title: "Bài 5: Kỹ thuật Cauchy ngược dấu", bunny: "579455/c9b58aff-4bac-464d-8542-1dd328198cbd", homework: { gd: "1gbi8wGOp8b9UCDnPMfb2jq_gvJJhoS7W" } },
          { title: "Bài 6: Kỹ thuật Cauchy cộng mẫu", bunny: "579455/3464674c-8dc8-4829-a408-ed1cdf13d39e", homework: { gd: "1QP_tgRRMLMCokCBS6sUpUJ6ilAiN5_By" } },
          { title: "Bài 7: Bất đẳng thức Cauchy-Schwarz", bunny: "579455/0821a65c-c00e-4961-865d-5b6c8e6a59e1", homework: { gd: "1Uv5rw5nnN-arPesYuMwgLFPak4ch1t-8" } },
          { title: "Bài 8: Bất đẳng thức Schwarz", bunny: "579455/d13f8d41-2b71-4458-95ca-cb61fc06cba2", homework: { gd: "1ilqMwSJWxII5ZXCx-d2Iyt3L-8W1KDyl" } },
          { title: "Bài 9: BĐT Minkowski, Schur và ứng dụng", bunny: "579455/397cd71f-1987-4966-9f22-a06e2b79a520", homework: { gd: "15fRqeaAAkUp3i8gIYxiwTUOs6wIRVDzL" } },
          { title: "Bài 10: BĐT với biến bị chặn", bunny: "579455/2fd9a710-842b-4abd-abe8-62ae0559b54a", homework: { gd: "13tTOkc0vpzL9tQliIwa_shh_Fo9QOJte" } },
          { title: "Bài 11: Kỹ thuật hệ số bất định (U.C.T)", bunny: "579455/ef321546-b5b3-4fde-bf7f-8ffc1955eb21", homework: { gd: "1mKMhTSjdMTh08su9hcVGgoHx8EjAfriD" } },
          { title: "Bài 12: Phương pháp đổi biến", yt: "RYUvmiwBjAA", homework: { gd: "1zvk0G3vbuqeomTg_VaKHGxZIu-H4gvNR" } },
          { title: "Bài 13: Phương pháp nhóm Abel", bunny: "579455/b1b9bf11-5410-49b4-b078-fb6112512c00", homework: { yt: "-nBg1a-3hgs" } },
          { title: "Bài 14: S.O.S và phương pháp miền giá trị", bunny: "579455/c6e49b3d-94f3-432e-a2e9-175c3a806a92", homework: { gd: "1Ss_1k-9sbva9xier36jCyuoVdDgjMcCj" } },
          { title: "Bài 15: Một số phương pháp khác", bunny: "579455/cb095708-43fa-4309-ade4-7ed1e7c7e0d8", homework: { gd: "1fE83KSYP7AmhtCsPjNg9s4aL5Q261279" } },
          { title: "[Tổng hợp] BĐT trong kì thi Chuyên toán (1)", yt: "KQOYJ-7dUIM" },
          { title: "[Tổng hợp] BĐT trong kì thi Chuyên toán (2)", yt: "h2ISdGysrvU" },
          { title: "[Tổng hợp] BĐT trong kì thi Chuyên toán (3)", yt: "0jooopN53lk" },
          { title: "[Tổng hợp] BĐT trong kì thi Chuyên toán (4)", yt: "6RLbqVQFTrk" },
        ]
      },
      {
        title: "CHƯƠNG 6: HÀM SỐ VÀ ĐỒ THỊ",
        lessons: [
          { title: "Bài 1: Hàm số bậc nhất y = ax + b (a ≠ 0)", yt: "xwxsxjs_6aw", homework: { gd: "1ixEpNyYxVC1rxAFG1QCI0h75ZS4zGLHr" } },
          { title: "Bài 2: Hàm số bậc hai y = ax² (a ≠ 0)", yt: "DTeRTfoK5dk", homework: { gd: "1R0MJCfICCHm2ErP7pWzJuzDjbV0LFmdd" } },
          { title: "Bài 3: PT bậc hai ax² + bx + c = 0 (a ≠ 0)", yt: "g24hTawb1po", homework: { gd: "1tU1SJF0s2aPg3QOMHtAD1Vz05N7YPAT5" } },
          { title: "Bài 4: Định lí Viet và ứng dụng", yt: "_dwEpdooE4o", homework: { gd: "11pIQoESh7geYunKJ76s_6Rpfu6VADRvy" } },
          { title: "Bài 5: Bài toán về nghiệm của PT bậc hai", yt: "NTU_AxZ7wYA", homework: { gd: "1JkqFPyN1EgfTTlDtKvpGoC4tXkoTc7b5" } },
          { title: "Bài 6: Tương giao giữa đường thẳng và parabol", yt: "8FXdh5DYMvg", homework: { gd: "1Hbk5NvWukBnXeRpsT-YttkOx0cf1L2ML" } },
        ]
      },
    ]
  },
  {
    section: "Hình học",
    color: "#E8574A",
    icon: "fa-draw-polygon",
    chapters: [
      {
        title: "CHƯƠNG 1: HỆ THỨC LƯỢNG TRONG TAM GIÁC VUÔNG",
        lessons: [
          { title: "Bài 1: Tỉ số đoạn thẳng", yt: "pSD8nXXDnVg", homework: { yt: "SiR7C00tThc" } },
          { title: "Bài 2: Hệ thức lượng trong tam giác vuông", yt: "bvRwq7FRHIk", homework: { yt: "-SrYbILhPck", gd: "14OW1sQ0unpiRMuVQMFeZXpVNqTw3mJOS" } },
          { title: "Bài 3: Tỉ số lượng giác của góc nhọn", yt: "42XEe8REBQg", homework: { yt: "PmjZeGkiiTw", gd: "1FpnkVXGqiKjyOcwRiYZPFGfJN3G1qKhw" } },
          { title: "Bài 4: Kĩ thuật tam giác đồng dạng", yt: "mzgyXzjoeOU", homework: { gd: "1dQXAnHO7LXwCmVpNMDWMIRvCAI0cdGMo" } },
          { title: "Bài 5: Chứng minh đẳng thức hình học", yt: "bVR967WdoUs", related: { yt: "SvNmv7xFy-A" }, homework: { gd: "1Bgo1FRMPt_-Lpf1-bSfbb4vLwxJESnTa" } },
          { title: "Bài 6: Bất đẳng thức và cực trị hình học", yt: "1h6p_92vgmE", homework: { gd: "1qvetFoHYwU9FJjdmzZaUU8HSwqtgxHZ5" } },
        ]
      },
      {
        title: "CHƯƠNG 2: ĐƯỜNG TRÒN - TIẾP TUYẾN",
        lessons: [
          { title: "Bài 1: Đường tròn", bunny: "597493/415069d8-dc03-458a-9134-a29afeb650f1", homework: { gd: "1BhN4HjC8HNP7R6xFA-IV3pFftFOyAmcf" } },
          { title: "Bài 2: Tiếp tuyến", bunny: "597493/2ef01721-0ed4-42d1-92fa-dd8a4deaa913", homework: { gd: "1kBDvBnSG_Iu5ACX0PclsRsay5V50GaD4" } },
          { title: "Bài 3: Mô hình tiếp tuyến, cát tuyến", bunny: "597493/80e305b3-edc4-4df1-9707-8d38d714fe70", homework: { gd: "1Ef-kgPK73lnlrVatyanXqd6udMe_ZZiU" } },
          { title: "Bài 4: Mô hình tâm nội tiếp, bàng tiếp", bunny: "597493/70ddaa45-0bd1-4a4d-a2f6-440463e2604f", homework: { gd: "1WfWK90rcQBMuQTMa7o0fY2zd0fEnsHt-" } },
          { title: "Bài 5: Mô hình trực tâm", bunny: "597493/2448f5f5-0455-4d6a-9927-2262f53303e1", homework: { gd: "190Ub3kYWvYp4scYQvcS_mbLNBr1TYR83" } },
          { title: "Bài 6: Mô hình hai đường tròn", bunny: "597493/2b4241df-ba72-4872-a747-8a6067e03b22", homework: { gd: "11jJZDbdqW5U20RlPjv-1Xml26XQt9Gs3" } },
        ]
      },
      {
        title: "CHƯƠNG 3: TỨ GIÁC NỘI TIẾP",
        lessons: [
          { title: "Bài 1: Liên hệ giữa đường kính và dây - Góc nội tiếp", bunny: "592863/1b6f79bd-1a24-434a-8c0c-bd1de59e861a", homework: { yt: "g03O_XGexvU", yt2: "Xn9hKTqeZaM", yt3: "bSew_AFeeWA" } },
          { title: "Bài 2: Góc tạo bởi tiếp tuyến và cát tuyến", bunny: "592863/def89194-081f-4270-ba94-a422b13205e6", homework: { yt: "0mVBNiTu0H0", yt2: "G74qk9VXylA" } },
          { title: "Bài 3: Tứ giác nội tiếp - Tiêu chuẩn 1", bunny: "592863/75129d1a-ca05-4eaf-b3cf-b1e76fc6436b", homework: { yt: "qDu_QfuDqZw", yt2: "Jo3ORs6RO8g" } },
          { title: "Bài 4: Tứ giác nội tiếp - Tiêu chuẩn 2", bunny: "592863/f5dd404f-0571-4aa2-9eb4-b6c8fea40003", homework: { yt: "MVGD954ERrk" } },
          { title: "Bài 5: Tứ giác nội tiếp - Tiêu chuẩn 3", bunny: "592863/33ae5232-59a6-4eaa-b2f8-c36843a91027", homework: { gd: "1XZzVvFFA5-SuKcUDVfF37xBuJXGH-S4l" } },
          { title: "Bài 6: Tổng ôn tứ giác nội tiếp", yt: "RbiYS67ZpLE", related: { yt: "aCw_y-wDcSo" }, homework: { yt: "Jr6wLCmIer4" } },
          { title: "Bài 7: Diện tích, thể tích", yt: "yIQ_PXb6UeI", homework: { gd: "1c_u3Y7CDHHiERtGaIM-T0mz25pCZKlwo" } },
        ]
      },
      {
        title: "CHƯƠNG 4: MÔ HÌNH QUAN TRỌNG",
        lessons: [
          { title: "Bài 1: Mô hình tiếp tuyến, cát tuyến", bunny: "580842/2eed6cf3-8466-498e-87df-4281cf64e22a", homework: { yt: "tY4hBPRxY5U", yt2: "MQkTQQ_jjV0" } },
          { title: "Bài 2: Mô hình tứ giác điều hòa", bunny: "580842/9df2e52f-b6df-4949-aabb-9ecfc6f09453", homework: { gd: "1D-vD4fgqiJTABYrTyyYQR6F959r7oPtG" } },
          { title: "Bài 3: Mô hình trực tâm - Đường tròn ngoại tiếp", bunny: "580842/802ccd26-4b45-4e2d-9c56-bb877012d36c", homework: { yt: "f2NYdRCN4io", yt2: "v7l7JN4yyn8" } },
          { title: "Bài 4: Mô hình tâm nội tiếp, bàng tiếp", bunny: "580842/418e9889-4021-40cb-925c-226280cd2469", homework: { yt: "Ybsvskp5gkk" } },
          { title: "Bài 5.1: Một số bài toán đặc biệt", yt: "oiecTAcWm70" },
          { title: "Bài 5.2: Một số bài toán đặc biệt", yt: "pUtZ6VaBlJM" },
        ]
      },
      {
        title: "CHƯƠNG 5: KỸ THUẬT CHỨNG MINH HÌNH HỌC",
        lessons: [
          { title: "Bài 1.1: Kỹ thuật chứng minh thẳng hàng", bunny: "593344/29867279-43bb-4ec6-b239-edd06e1bb09a", homework: { yt: "99qIucAoscM" } },
          { title: "Bài 1.2: Kỹ thuật chứng minh thẳng hàng", bunny: "593344/0f95c21f-ed0a-490b-aa60-2daa5028423c", homework: { yt: "wf8xT7zwRAc" } },
          { title: "Bài 2.1: Kỹ thuật chứng minh đồng quy", bunny: "593344/a693cb46-1b62-4b50-8add-057d5bab7a62", homework: { yt: "cfjE8PmJZaQ" } },
          { title: "Bài 3: Điểm cố định", bunny: "593344/4d313679-128b-4bb4-a7c1-231711e05e9f", homework: { yt: "Cj8DQJFPJXA" } },
          { title: "Bài 4: Đường cố định", bunny: "593344/f7f387d6-de13-4eb0-976c-80d4b2175bfa", homework: { yt: "Y_C1ENN90tI" } },
          { title: "Bài 5: Bất đẳng thức và cực trị hình học", yt: "1tst5TH2J_4" },
          { title: "Bài 6: Kỹ thuật biến đổi góc", yt: "SBfVPc8G-AE" },
        ]
      },
    ]
  },
  {
    section: "Số học",
    color: "#50B86C",
    icon: "fa-superscript",
    chapters: [
      {
        title: "CHƯƠNG 7: PHƯƠNG TRÌNH NGHIỆM NGUYÊN",
        lessons: [
          { title: "Bài 1: Phương pháp xét tính chia hết", yt: "4ADvzNLcXT0", homework: { gd: "1FQ_UWqP6l1ndUmh2czXj19SE2pfhKaS6" } },
          { title: "Bài 2: Phương pháp đánh giá", yt: "O_XEh3lkebs", homework: { gd: "1FywQBkUxfw10yc93IsiwUMgnzcG6pA2e" } },
          { title: "Bài 3: PP sử dụng tính chất của số chính phương", yt: "Q92qN3TTC6Y", homework: { gd: "1AIBoy5giU1ZP0deTB9LaGx7tdkvz331u" } },
          { title: "Bài 4: Phương trình hai ẩn bậc cao", yt: "OhLt9arG4i8", homework: { gd: "1XBnDq13Tjpn9B9Ur8rnL4O57oFchSlHw" } },
          { title: "Bài 5: PT ba ẩn, phân thức, mũ, vô tỉ", yt: "Mb8bWPST2xs", homework: { gd: "1EuHXWc9MD678KiDRjfTT1aJNYxVau_yV" } },
        ]
      },
      {
        title: "CHƯƠNG 8: SỐ HỌC",
        lessons: [
          { title: "Bài 1: PP chứng minh bài toán chia hết", yt: "ccSTkjzqz-c", homework: { yt: "x8XSSoimMH4" } },
          { title: "Bài 2: Các bài toán về phép chia hết", yt: "LBOh3IGH8hc", homework: { yt: "Kp8T7SPBOvo" } },
          { title: "Bài 3: Số nguyên tố, hợp số", yt: "nvrqNezMRiU", homework: { yt: "eWAJJl0e_TY" } },
          { title: "Bài 4: Số chính phương", yt: "d-wxDOLgZO8", homework: { yt: "Ub6T021yOto" } },
          { title: "Bài 5: Đồng dư", yt: "-D0rm0q1ass", homework: { yt: "EouoIHdqpCE" } },
          { title: "Bài 6: Ứng dụng của đồng dư [1-10]", yt: "GuA-tkaenac" },
          { title: "Bài 6: Ứng dụng của đồng dư [11-15]", yt: "qIx35DaEx8I" },
          { title: "Bài 7: Ôn tập số học buổi 1 [1-5]", yt: "TQLO2fCTiVY" },
          { title: "Bài 7: Ôn tập số học buổi 1 [6-10]", yt: "o691Gj5tNLM" },
          { title: "Bài 8: Ôn tập số học buổi 2 [1-7]", yt: "T4zzce3MWd0" },
        ]
      },
      {
        title: "CHƯƠNG 9: ĐẠI SỐ TỔ HỢP - XÁC SUẤT",
        lessons: [
          { title: "Bài 1: Hai quy tắc đếm cộng và nhân", yt: "hfBEMKwnOVM", homework: { url: "https://azota.vn/de-thi/cevgvr" } },
          { title: "Bài 2: Hoán vị - Chỉnh hợp - Tổ hợp", yt: "lr0i14VDYB0", homework: { url: "https://azota.vn/de-thi/yz9sva" } },
          { title: "Bài 3: Xác suất", yt: "UaYasTchtwo", homework: { url: "https://azota.vn/de-thi/mzsaoy" } },
          { title: "Bài 4: Nguyên lí bù trừ", yt: "xmExoYMz77E", homework: { gd: "1AWqPvmI7NYdasuLk9vuAZ5rH-KQrGPWE" } },
        ]
      },
      {
        title: "CHƯƠNG 10: TOÁN RỜI RẠC - SUY LUẬN",
        lessons: [
          { title: "Bài 1: Nguyên lí Dirichlet trong số học", yt: "jggpzhBMd0E", homework: { gd: "15ta6hehM2ozk4_rVwV7w8CfesZ2zut3X" } },
          { title: "Bài 2: Nguyên lí Dirichlet trong hình học", yt: "u-fUGAoVhkI", homework: { gd: "1JDWsI_mioRVEvlNjSX-iOdthqdZ5oinx" } },
          { title: "Bài 3: Nguyên lí cực hạn", yt: "WrdwHRiqmZc", homework: { gd: "1255RWNrUcx68r30eXMqcl6BVolDyVeZ4" } },
          { title: "Bài 4: Nguyên lí bất biến", yt: "dZMg880Emrc", homework: { gd: "1Okg--HFD9vH-yigtd_Hadyv0qHCGdMpK" } },
        ]
      },
    ]
  },
  {
    section: "Biến đổi đồng nhất & Đa thức",
    color: "#9B59B6",
    icon: "fa-magic",
    chapters: [
      {
        title: "BIẾN ĐỔI ĐỒNG NHẤT",
        lessons: [
          { title: "Biến đổi đồng nhất (phần 1)", yt: "XxRZWFMoIRk" },
          { title: "Biến đổi đồng nhất (phần 2)", yt: "JqWRxNIDDv4" },
        ]
      },
      {
        title: "ĐA THỨC",
        lessons: [
          { title: "Bài 1: Tính chất chia hết của đa thức", yt: "vmEg0afEhnU" },
          { title: "Bài 3: Tìm đa thức chưa biết", yt: "H-e3yiW1Mcc" },
          { title: "[Live] Tổng hợp đa thức trong đề thi", yt: "YINQogFENvo" },
        ]
      },
    ]
  },
  {
    section: "Ôn tập",
    color: "#E67E22",
    icon: "fa-edit",
    chapters: [
      {
        title: "ÔN TẬP TỔNG HỢP",
        lessons: [
          { title: "Biến đổi đồng nhất", homework: { gd: "1eiKnAym5vrRNr-8iLIAlXDqwABz0hiSJ" } },
          { title: "Phương trình và hệ phương trình", yt: "W50bzPF2k2Y", homework: { gd: "1LFUgbjZ6ZMJ9kjfHRODYR8cotpGF3PWn" } },
          { title: "Bất đẳng thức", yt: "P7HLoCYLoE0", related: { yt: "qaOBbu2Fwag" }, homework: { gd: "1iTCA_GVVs8zMdv-DR6jSCHmVG-07PT-Q" } },
          { title: "Số học", yt: "VLXeU40k9-M", related: { yt: "Do_2TINdeB4", yt2: "nj_4cw_z6E4", yt3: "3YUIbto6P0c" }, homework: { gd: "1huyXbY2SIHVtief4pZDHPyC2TVLHOPWY" } },
          { title: "Nguyên lí Dirichlet trong phân hoạch tập hợp", yt: "Yq2OTyySjZI", homework: { gd: "1NTF8wqT1vWwtOD5cOHwSo69znowRjHz6" } },
          { title: "Đa thức", bunny: "607183/232c4dc7-c6d2-4681-8ab8-392c0f713c60", homework: { gd: "1M_OtJgse3EJi-KHFTiZk_jZV4uL8JT-D" } },
        ]
      },
    ]
  },
  {
    section: "Đề tinh hoa",
    color: "#F39C12",
    icon: "fa-trophy",
    chapters: [
      {
        title: "ĐỀ TINH HOA",
        lessons: [
          { title: "Đề tinh hoa số 01", yt: "LrG42s1uS5E" },
          { title: "Đề tinh hoa số 02", yt: "GxN9h-75xPE" },
          { title: "Đề tinh hoa số 03", yt: "T1h5l8G7emk" },
          { title: "Đề tinh hoa số 04", yt: "IssD1IlaHnk" },
          { title: "Đề tinh hoa số 05", yt: "EwBqkAyNqoU" },
          { title: "Đề tinh hoa số 06", yt: "0HqjRUO9xhc" },
        ]
      },
    ]
  },
  {
    section: "Tài liệu",
    color: "#1ABC9C",
    icon: "fa-folder-open",
    chapters: [
      {
        title: "ĐẠI SỐ",
        lessons: [
          { title: "Chương 1: PT, BPT và hệ PT", gd: "14xG7akcrxN0T0F0uBrPr3uZtKqDFwfE3" },
          { title: "Chương 2: Căn bậc hai, căn bậc ba", gd: "1FAV0sYTGIF0UxUYRJjJlIYrVmNstaUmN" },
          { title: "Chương 3: Phương trình vô tỉ", gd: "1AugxQ8RuiTFQKKnsBMQsema5NZk5wHQW" },
          { title: "Chương 4: Hệ phương trình", gd: "1Zm-GDayqXrdplFlvv9vH9rYEdjBZC7o4" },
          { title: "Chương 5: Bất đẳng thức", gd: "1s8uF4Wbzxf9Po8QusxV5oWaKPXR1EH1R" },
          { title: "Chương 6: Hàm số và đồ thị", gd: "1qoqagwu2RV4QJlH5vCU9XvFXyE0RJ0Jw" },
        ]
      },
      {
        title: "SỐ HỌC",
        lessons: [
          { title: "Chương 7: Phương trình nghiệm nguyên", gd: "1DdE9oNzV0KKloDUCUTwo_CCuOQVTsA-E" },
          { title: "Chương 8: Số học", gd: "1H30xWROg7iTYss2D32V7Hp8u9dCjErmV" },
          { title: "Chương 9: Đại số tổ hợp - Xác suất", gd: "1KeBkaiV3LhIj30voRozS0kyczpe5QpLi" },
          { title: "Chương 10: Toán suy luận - Logic", gd: "10MBFYrmjOUWjAsJKQc8NbFjbPBv9n7r0" },
        ]
      },
      {
        title: "HÌNH HỌC",
        lessons: [
          { title: "Chương 1: Hệ thức lượng trong tam giác vuông", gd: "1DfbufOm2rqvMX6SbAAy3u_4wRghDaqzu" },
          { title: "Chương 2: Đường tròn, tiếp tuyến", gd: "1I5jrC0vxJhoQzz1YnMt8gPo59BK6aI4X" },
          { title: "Chương 3: Tứ giác nội tiếp", gd: "11j9gKQkO3vaPHOv014BUaqq29JuEkSyG" },
          { title: "Chương 4: Mô hình quan trọng", gd: "1oclH2FgxfCbKtRE4J0T8UqnUp83dl4L7" },
          { title: "Chương 5: Kỹ thuật chứng minh hình học", gd: "1PPg-iDhdCFdtFzWxXCywRw_V4EoJi8Sz" },
        ]
      },
    ]
  },
];