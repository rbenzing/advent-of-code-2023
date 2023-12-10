// data
var data = `
3 -3 -6 11 81 262 654 1429 2882 5527 10296 18955 34930 64825 120957 225074 412708 735639 1255391 2011191 2927270
13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33
18 44 80 138 241 419 713 1199 2046 3624 6680 12602 23793 44179 79877 140051 237986 392412 629112 982850 1499657
4 10 16 22 28 34 40 46 52 58 64 70 76 82 88 94 100 106 112 118 124
8 31 66 118 205 361 636 1092 1794 2795 4114 5706 7423 8965 9820 9192 5916 -1641 -15694 -39170 -75855
21 31 41 51 61 71 81 91 101 111 121 131 141 151 161 171 181 191 201 211 221
10 22 34 46 58 70 82 94 106 118 130 142 154 166 178 190 202 214 226 238 250
1 -2 -1 24 123 400 1046 2381 4905 9358 16789 28634 46803 73776 112708 167543 243137 345390 481387 659548 889787
4 9 22 63 160 356 735 1480 2994 6143 12726 26361 54133 109647 218717 430155 836788 1617537 3123198 6051903 11804234
14 19 21 24 35 63 119 217 376 623 997 1554 2373 3563 5271 7691 11074 15739 22085 30604 41895
-5 -14 -20 -19 -9 7 18 2 -75 -246 -489 -592 103 3089 11153 28697 61471 114898 189638 272303 318255
4 6 10 8 -9 -50 -128 -260 -443 -575 -279 1423 6650 19491 47209 101917 202834 379240 674260 1149618 1891513
4 4 11 40 111 257 535 1039 1928 3506 6419 12059 23294 45731 90042 176880 348530 697505 1434994 3046426 6624525
1 12 40 96 198 379 697 1247 2175 3694 6102 9802 15324 23349 34735 50545 72077 100896 138868 188196 251458
1 3 21 68 154 279 433 616 901 1595 3632 9495 25275 65054 159865 375410 846109 1838823 3869067 7907554 15737988
4 9 21 42 74 125 227 484 1181 2998 7386 17175 37497 77120 150302 279287 497578 854135 1418659 2288136 3594828
10 12 17 36 96 240 522 996 1698 2620 3675 4652 5160 4560 1884 -4260 -15798 -35316 -66203 -112812 -180640
11 34 85 190 388 731 1284 2125 3345 5048 7351 10384 14290 19225 25358 32871 41959 52830 65705 80818 98416
28 38 52 78 133 261 557 1197 2478 4885 9238 17057 31462 59268 115551 233040 480604 998608 2065504 4222512 8506623
23 52 100 171 268 389 520 625 633 422 -200 -1517 -3930 -7985 -14404 -24119 -38309 -58440 -86308 -124085 -174368
4 16 43 85 142 214 301 403 520 652 799 961 1138 1330 1537 1759 1996 2248 2515 2797 3094
4 12 35 82 170 341 696 1460 3104 6578 13768 28402 57837 116551 232922 462330 912320 1790376 3493053 6768602 13006272
14 31 74 162 327 629 1188 2245 4277 8228 16001 31523 63018 127736 261523 537660 1102936 2244813 4513004 8933472 17374961
20 45 95 183 338 630 1206 2335 4467 8324 15059 26559 46079 79681 139617 252193 475345 935938 1904606 3937618 8130943
-9 -14 -13 13 106 350 908 2100 4569 9612 19787 39960 79088 153404 292626 553025 1045835 1998494 3882531 7669911 15325462
21 48 90 158 273 474 829 1453 2542 4449 7875 14348 27346 54729 113662 240131 506947 1057846 2173056 4397514 8793799
22 33 39 38 26 -9 -90 -229 -345 -65 1693 7537 23135 59991 140290 305058 627444 1233661 2335051 4275896 7603016
6 18 45 112 269 605 1272 2540 4925 9475 18382 36241 72550 146516 296015 593807 1176040 2290960 4379915 8208614 15074675
16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56
1 4 13 32 70 146 304 652 1460 3396 8055 19048 44057 98406 210845 432516 850939 1613556 2972573 5379680 9694792
16 21 44 112 268 590 1226 2461 4854 9527 18779 37383 75279 153016 312397 636625 1287305 2570722 5054223 9767479 18546415
-3 1 12 30 55 87 126 172 225 285 352 426 507 595 690 792 901 1017 1140 1270 1407
23 32 41 50 59 68 77 86 95 104 113 122 131 140 149 158 167 176 185 194 203
16 30 49 75 120 208 372 655 1141 2068 4129 9193 21952 53530 129005 302219 683258 1486530 3110197 6260231 12133468
8 24 55 125 271 550 1066 2043 3986 7993 16315 33326 67193 132777 256722 486398 905484 1660670 3006423 5378243 9509619
0 -3 -6 -11 -27 -73 -174 -348 -578 -755 -571 660 4265 12545 29117 59131 109124 186133 295508 436639 595533
6 13 29 58 111 221 473 1057 2370 5224 11256 23671 48470 96335 185431 345711 626202 1108763 1935803 3366692 5889861
17 28 41 62 99 159 257 451 920 2121 5116 12284 28882 66394 149509 330320 716811 1529626 3214711 6665350 13654853
-6 5 36 100 223 467 964 1964 3909 7571 14364 27108 51874 102228 208496 437087 929332 1977347 4169032 8660650 17682393
-2 4 26 82 208 465 953 1842 3430 6238 11152 19622 33928 57523 95463 154934 245886 381784 580486 865258 1265936
18 23 31 46 79 154 314 627 1192 2145 3665 5980 9373 14188 20836 29801 41646 57019 76659 101402 132187
16 16 20 40 91 199 423 899 1925 4118 8682 17824 35336 67317 122931 214975 359854 576316 881976 1286240 1777713
-3 -4 -2 2 7 12 16 18 17 12 2 -14 -37 -68 -108 -158 -219 -292 -378 -478 -593
12 9 20 55 119 225 429 896 2007 4527 9882 20648 41446 80573 152889 284733 521966 942645 1676328 2932605 5042153
10 4 -8 -25 -47 -80 -141 -263 -500 -932 -1670 -2861 -4693 -7400 -11267 -16635 -23906 -33548 -46100 -62177 -82475
-2 7 38 102 211 378 617 943 1372 1921 2608 3452 4473 5692 7131 8813 10762 13003 15562 18466 21743
3 14 41 85 150 258 476 962 2049 4412 9425 19949 42048 88572 186252 389014 801743 1620834 3200689 6159005 11538410
24 49 88 148 241 384 599 913 1358 1971 2794 3874 5263 7018 9201 11879 15124 19013 23628 29056 35389
12 11 10 9 8 7 6 5 4 3 2 1 0 -1 -2 -3 -4 -5 -6 -7 -8
8 9 15 26 42 63 89 120 156 197 243 294 350 411 477 548 624 705 791 882 978
-5 8 36 79 137 210 298 401 519 652 800 963 1141 1334 1542 1765 2003 2256 2524 2807 3105
3 6 24 67 149 296 551 984 1728 3075 5679 10926 21544 42539 82556 155777 284481 502404 859050 1425117 2299215
7 5 9 45 161 446 1058 2258 4451 8252 14630 25240 43135 74156 129417 229404 410231 732435 1292175 2233571 3758813
7 5 13 39 99 238 568 1327 2973 6346 12959 25516 48801 91137 166678 298870 525499 905835 1530481 2534645 4115671
5 5 12 44 127 294 583 1027 1623 2269 2674 2285 361 -3479 -7447 -2669 39073 194430 655277 1878326 4913481
15 30 71 154 304 563 999 1731 3006 5397 10248 20595 42980 90914 191341 396470 805013 1599528 3110673 5925336 11064604
21 30 54 105 201 384 756 1535 3126 6202 11814 21634 38650 69089 127219 246265 501481 1056384 2251952 4774113 9961901
2 0 -7 -19 -36 -58 -85 -117 -154 -196 -243 -295 -352 -414 -481 -553 -630 -712 -799 -891 -988
21 37 61 101 170 286 472 756 1171 1755 2551 3607 4976 6716 8890 11566 14817 18721 23361 28825 35206
2 0 -7 -13 7 107 383 991 2184 4411 8581 16723 33539 69860 149938 326108 707143 1511667 3167550 6496976 13064172
18 31 47 73 126 241 490 1023 2156 4562 9677 20534 43434 91257 189989 391476 797918 1607725 3198751 6274407 12111638
1 -4 -10 -16 -14 19 129 393 927 1894 3512 6062 9896 15445 23227 33855 48045 66624 90538 120860 158798
15 26 36 47 64 101 209 549 1553 4261 11002 26707 61302 133821 279077 557868 1071635 1981960 3533816 6078267 10084124
8 29 71 160 345 716 1439 2829 5490 10556 20076 37611 69169 124717 220704 384338 660820 1125391 1902941 3199114 5348377
28 40 50 59 72 105 207 524 1457 3999 10375 25152 57031 121578 245194 470663 864650 1527546 2606072 4309057 6926794
-1 10 29 56 91 134 185 244 311 386 469 560 659 766 881 1004 1135 1274 1421 1576 1739
15 13 4 -19 -64 -129 -185 -160 71 703 2082 4997 11511 27016 64864 156081 368507 842365 1852724 3913217 7938726
11 17 22 30 61 165 449 1134 2665 5900 12404 24871 47691 87670 154899 263753 433983 691843 1071170 1614308 2372737
10 24 56 125 264 539 1082 2140 4142 7786 14148 24815 42044 68949 109718 169862 256498 378668 547696 777585 1085456
10 4 -5 -6 30 162 508 1300 2974 6308 12625 24071 43952 77090 130227 212874 340009 540079 875058 1483207 2656869
6 26 60 108 170 246 336 440 558 690 836 996 1170 1358 1560 1776 2006 2250 2508 2780 3066
27 44 64 93 158 320 687 1427 2781 5076 8738 14305 22440 33944 49769 71031 99023 135228 181332 239237 311074
22 45 77 115 156 197 235 267 290 301 297 275 232 165 71 -53 -210 -403 -635 -909 -1228
10 27 74 180 385 741 1319 2221 3589 5596 8399 12036 16283 20627 24921 32274 57808 150885 445444 1264840 3326281
4 9 14 10 -11 -44 -39 174 1032 3504 9565 23061 51302 107957 218169 427322 815775 1523724 2794751 5057405 9089818
-6 3 32 94 205 386 672 1132 1913 3337 6103 11676 22982 45572 89469 171970 321740 584607 1031546 1769426 2955187
13 33 75 168 367 762 1487 2732 4761 7939 12771 19956 30459 45604 67191 97640 140165 198981 279547 388848 535719
-2 8 45 133 315 668 1328 2528 4645 8240 14058 22933 35516 51712 69675 84168 84048 48584 -57741 -292355 -744127
17 31 46 69 111 197 386 796 1629 3191 5902 10291 16971 26589 39746 56882 78121 103071 130574 158401 182887
24 47 96 198 389 718 1269 2218 3946 7240 13642 26061 49855 94729 177991 329971 602748 1083757 1916372 3330192 5684505
12 24 62 143 283 495 787 1165 1663 2455 4158 8515 19758 47098 108977 239951 501358 997266 1897598 3470799 6128949
4 9 16 22 24 19 4 -24 -68 -131 -216 -326 -464 -633 -836 -1076 -1356 -1679 -2048 -2466 -2936
17 39 83 173 357 717 1392 2626 4864 8949 16535 30946 58909 113909 222399 434786 844038 1615986 3037174 5589190 10064700
17 31 51 85 155 309 633 1263 2397 4307 7351 11985 18775 28409 41709 59643 83337 114087 153371 202861 264435
14 13 22 54 125 264 528 1028 1986 3858 7576 15002 29802 59244 118087 237089 481374 989363 2054237 4293311 8998717
19 36 61 94 135 184 241 306 379 460 549 646 751 864 985 1114 1251 1396 1549 1710 1879
-8 -9 -9 2 51 199 566 1370 3008 6250 12703 25863 53356 111454 233791 487703 1004407 2034620 4051822 7946267 15393468
15 31 60 122 253 522 1077 2250 4761 10081 21062 43051 85935 168014 323419 616195 1166443 2197435 4117856 7660872 14112281
17 25 44 85 164 302 525 864 1355 2039 2962 4175 5734 7700 10139 13122 16725 21029 26120 32089 39032
14 29 70 163 349 691 1286 2283 3919 6612 11196 19458 35279 66985 132182 267789 551009 1143219 2381512 4968628 10365080
18 44 83 137 222 382 710 1397 2859 6035 13008 28181 60360 126307 256733 506486 972132 1822622 3352801 6075781 10879406
-6 -14 -26 -42 -62 -81 -71 68 612 2202 6157 14961 32985 67535 130456 241024 432315 766918 1376339 2556786 4991761
23 29 31 26 5 -40 -95 -80 245 1481 4999 13719 33503 75514 160033 322405 622011 1155445 2075423 3617376 6136193
20 24 37 80 182 381 725 1277 2143 3582 6334 12440 27078 62409 145346 332998 743218 1614884 3426187 7124108 14562042
21 26 28 27 23 16 6 -7 -23 -42 -64 -89 -117 -148 -182 -219 -259 -302 -348 -397 -449
2 13 29 55 107 217 444 894 1752 3329 6127 10925 18889 31709 51766 82332 127806 193989 288401 420643 602807
5 16 29 44 61 80 101 124 149 176 205 236 269 304 341 380 421 464 509 556 605
19 30 46 79 152 293 539 965 1753 3316 6492 12823 24934 47027 85505 149741 253007 413578 656026 1012719 1525540
9 26 65 143 282 512 880 1470 2444 4131 7233 13298 25744 51914 106888 220002 445015 874132 1653633 2992813 5145074
15 25 44 84 171 356 728 1443 2803 5447 10756 21647 44088 90001 182883 368685 736547 1457289 2852608 5515354 10511813
8 2 8 39 112 257 541 1125 2392 5213 11456 24898 52790 108483 215818 416576 783552 1444618 2629383 4763916 8669398
15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60 63 66 69 72 75
-8 -9 -9 -12 -14 17 182 730 2199 5652 13052 27827 55662 105486 190450 328388 540902 850213 1274345 1826386 2536966
18 21 24 27 30 33 36 39 42 45 48 51 54 57 60 63 66 69 72 75 78
20 27 37 71 179 454 1046 2176 4150 7373 12363 19765 30365 45104 65092 91622 126184 170479 226433 296211 382231
16 32 54 82 116 156 202 254 312 376 446 522 604 692 786 886 992 1104 1222 1346 1476
2 0 -8 -17 -9 49 216 607 1452 3209 6811 14265 30113 64825 142199 314558 692342 1499130 3169922 6520631 13031435
6 3 5 18 48 101 183 300 458 663 921 1238 1620 2073 2603 3216 3918 4715 5613 6618 7736
14 17 24 47 116 289 673 1464 3020 6006 11706 22713 44443 88375 178754 365935 751902 1537171 3103792 6157135 11960346
4 15 31 62 139 330 770 1725 3731 7891 16487 34191 70374 143364 288052 569050 1102718 2092823 3886351 7057972 12533669
18 33 72 149 293 571 1135 2305 4700 9442 18491 35235 65592 120159 218532 398160 732650 1369573 2607917 5054968 9940605
21 40 69 114 185 291 441 664 1068 1976 4214 9692 22526 51111 111788 235070 475823 929360 1756123 3218526 5734639
21 36 68 122 202 321 517 882 1623 3193 6563 13766 28954 60409 124306 251647 500833 980054 1886390 3572686 6659498
14 16 26 50 86 127 182 334 860 2447 6555 16007 35930 75232 148879 281333 511626 900674 1541576 2573792 4202246
8 18 39 81 172 371 796 1686 3540 7425 15634 33029 69674 145850 301431 613192 1226392 2411628 4665481 8885225 16665640
18 31 55 111 236 496 1003 1935 3568 6350 11077 19275 33974 61235 113157 213801 410742 797097 1552267 3014767 5808008
4 14 47 127 302 667 1407 2864 5634 10719 19821 36022 65436 121086 231453 458141 930264 1907948 3894323 7825249 15379602
1 12 32 60 95 136 182 232 285 340 396 452 507 560 610 656 697 732 760 780 791
-5 1 19 55 118 221 391 701 1350 2840 6330 14290 31656 67861 140511 282307 554433 1072559 2056593 3923381 7454062
18 24 30 36 42 48 54 60 66 72 78 84 90 96 102 108 114 120 126 132 138
24 46 80 126 191 307 562 1153 2470 5232 10742 21451 42307 83974 170212 353949 750508 1603022 3405588 7125936 14593623
10 24 47 79 120 170 229 297 374 460 555 659 772 894 1025 1165 1314 1472 1639 1815 2000
9 23 34 48 97 249 608 1313 2562 4711 8534 15784 30274 59809 119454 236829 460391 872007 1605554 2873816 5006599
8 10 21 52 128 316 767 1772 3832 7742 14689 26364 45088 73952 116971 179252 267176 388594 553037 771940 1058880
-1 4 15 28 32 10 -52 -145 -203 -52 661 2562 6670 14546 28474 51677 88571 145060 228875 349960 520908
26 38 50 57 59 66 100 192 368 622 902 1224 2258 7248 27189 93189 283490 778558 1967142 4640795 10336057
9 15 19 18 9 -11 -45 -96 -167 -261 -381 -530 -711 -927 -1181 -1476 -1815 -2201 -2637 -3126 -3671
2 18 46 92 168 286 458 720 1217 2415 5549 13493 32398 74786 165508 353467 735078 1501728 3036334 6110098 12282606
11 9 15 47 145 387 918 2015 4240 8790 18257 38186 80094 167022 343274 690796 1355713 2589927 4814443 8713297 15369679
7 12 28 66 153 344 749 1596 3356 6962 14172 28177 54673 103862 194349 360944 670572 1255091 2379262 4581040 8958398
8 33 79 165 325 616 1133 2046 3686 6731 12604 24331 48381 98542 203923 425220 887476 1845760 3816527 7839674 15999097
17 38 72 129 223 386 694 1309 2556 5092 10298 21148 43994 91966 191034 390228 778075 1508002 2836284 5177099 9180401
26 40 63 104 171 276 445 737 1280 2343 4489 8903 18069 37089 76103 154490 307814 598834 1134331 2090026 3746479
15 27 38 48 57 65 72 78 83 87 90 92 93 93 92 90 87 83 78 72 65
13 25 56 128 276 555 1053 1915 3386 5895 10241 18020 32563 60853 117168 229571 450851 876125 1670054 3107520 5632670
7 26 54 102 192 354 623 1035 1621 2398 3356 4440 5526 6390 6669 5813 3027 -2798 -13166 -30070 -56100
18 21 21 32 87 242 589 1294 2694 5525 11420 23922 50413 105578 217316 436392 851610 1612893 2965399 5298700 9216123
1 4 11 16 14 6 3 34 171 592 1711 4412 10432 22946 47415 92766 172981 309180 532291 886408 1432946
-3 4 29 89 209 426 799 1432 2529 4529 8432 16563 34303 73868 162247 357281 779243 1671420 3514465 7240023 14627059
8 18 30 41 56 94 189 386 732 1262 1980 2835 3692 4298 4243 2916 -544 -7302 -18886 -37251 -64848
6 24 57 119 234 433 747 1196 1774 2430 3045 3405 3170 1839 -1289 -7158 -17002 -32396 -55311 -88173 -133926
3 22 54 109 213 427 893 1921 4132 8673 17521 33894 62788 111660 191278 316760 508825 795280 1212768 1808803 2644119
14 24 36 66 152 362 808 1683 3349 6517 12584 24258 46773 90375 175496 343325 676584 1338526 2642844 5173714 9984030
9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29
-5 1 16 40 73 115 166 226 295 373 460 556 661 775 898 1030 1171 1321 1480 1648 1825
10 17 39 97 237 543 1161 2341 4511 8429 15540 28829 54758 107394 216764 445231 919185 1890483 3856610 7797591 15644256
11 36 71 109 137 134 85 27 159 1088 4352 13460 35825 86172 192368 405330 816051 1585380 2996813 5550367 10128233
12 22 30 36 40 42 42 40 36 30 22 12 0 -14 -30 -48 -68 -90 -114 -140 -168
0 12 31 68 148 318 664 1353 2743 5643 11863 25294 53960 113928 236941 485710 984942 1984002 3981123 7963052 15853384
10 29 59 111 211 416 842 1704 3368 6415 11717 20525 34569 56170 88364 135038 201078 292529 416767 582683 800879
18 37 82 172 339 635 1139 1964 3264 5241 8152 12316 18121 26031 36593 50444 68318 91053 119598 155020 198511
-4 -4 -4 -2 2 12 63 280 980 2828 7058 15770 32314 61772 111549 192084 317692 507548 786824 1187990 1752290
10 21 41 67 97 132 193 361 840 2029 4567 9283 16939 27596 39359 46165 34166 -23875 -176915 -507613 -1149099
9 16 48 127 285 566 1022 1705 2677 4099 6519 11549 23177 49951 108115 225374 444273 823370 1434170 2353919 3662437
17 31 69 140 244 377 554 860 1556 3308 7684 18207 42526 96801 214446 463438 980455 2037977 4175435 8453098 16936764
26 37 39 31 16 1 -3 19 86 221 451 807 1324 2041 3001 4251 5842 7829 10271 13231 16776
6 8 14 24 33 28 -15 -125 -304 -436 -59 2197 9981 32458 91584 237580 580114 1348072 2999080 6412278 13215705
1 14 49 121 265 560 1163 2363 4687 9124 17576 33693 64309 121813 228105 421661 771461 1406734 2582671 4824785 9237377
5 24 59 116 203 336 566 1038 2093 4426 9317 18958 36907 68710 122744 211348 352325 570916 902367 1395232 2115579
14 28 52 100 192 355 622 1029 1630 2595 4548 9477 22854 58099 145288 347179 787506 1699753 3510862 6987131 13496564
23 42 78 135 212 318 503 916 1914 4268 9556 20933 44706 93696 194600 404170 844298 1776402 3755153 7938413 16698553
4 16 44 101 200 354 576 879 1276 1780 2404 3161 4064 5126 6360 7779 9396 11224 13276 15565 18104
19 26 35 52 88 163 325 700 1602 3757 8731 19701 42791 89378 180201 353043 677629 1284828 2423155 4565130 8600794
-3 -9 -18 -23 -13 31 159 511 1434 3678 8689 19027 38997 75770 141740 259876 475815 884065 1681920 3274913 6473747
-1 -4 -11 -27 -51 -68 -39 111 507 1340 2885 5521 9753 16236 25801 39483 58551 84540 119285 164957 224101
20 45 87 150 243 384 601 937 1484 2494 4653 9676 21518 48759 109239 239048 509979 1063303 2174445 4374675 8674970
7 15 32 71 146 269 459 779 1425 2906 6377 14229 31133 65956 135486 272066 539695 1068049 2123094 4249471 8548096
-3 -8 -20 -45 -84 -115 -59 272 1237 3420 7656 15033 26970 45749 76574 133795 257173 550304 1264656 2972243 6902312
16 18 31 63 127 266 595 1361 3031 6434 13014 25323 48061 90400 171303 331586 660400 1350842 2811195 5877039 12198113
16 29 62 137 293 591 1119 2004 3447 5805 9759 16647 29131 52538 97509 185084 356224 689446 1333640 2570032 4930795
14 25 42 80 159 304 545 917 1460 2219 3244 4590 6317 8490 11179 14459 18410 23117 28670 35164 42699
8 11 18 35 70 133 239 437 909 2216 5819 15078 37037 85444 185638 382166 750278 1412793 2564240 4504661 7686024
0 -5 -10 -15 -20 -25 -30 -35 -40 -45 -50 -55 -60 -65 -70 -75 -80 -85 -90 -95 -100
9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60 63 66 69
3 5 4 -3 -29 -102 -270 -606 -1213 -2229 -3832 -6245 -9741 -14648 -21354 -30312 -42045 -57151 -76308 -100279 -129917
11 21 40 68 105 151 206 270 343 425 516 616 725 843 970 1106 1251 1405 1568 1740 1921
11 12 16 37 112 315 773 1684 3334 6103 10439 16764 25257 35436 45434 50833 42885 5910 -86382 -275945 -627178
10 30 71 160 336 658 1228 2230 3986 7033 12228 20899 35116 58344 97220 166227 299010 573556 1164241 2442954 5165712
4 2 8 31 93 240 551 1156 2290 4431 8598 16922 33651 66811 130821 250453 466640 844768 1486244 2544313 4245305
21 46 82 122 162 220 361 724 1544 3156 5961 10331 16455 24252 33871 48339 82391 186970 510216 1438112 3900024
4 3 19 69 181 411 868 1740 3317 6015 10415 17340 27998 44217 68786 105891 161594 244243 364619 535519 770339
21 43 88 180 360 690 1258 2190 3683 6093 10150 17433 31338 58958 114665 226911 451126 894072 1759581 3434347 6649853
6 6 18 64 189 470 1018 1986 3611 6333 11049 19575 35404 64863 118787 214843 380652 657872 1107420 1816026 2904327
1 21 53 104 197 374 698 1259 2187 3677 6054 9978 17056 31478 64024 141355 326905 766973 1790631 4121652 9316291
18 23 38 74 148 295 587 1163 2280 4406 8403 15919 30274 58468 115582 233962 481414 995521 2045548 4139776 8205192
25 35 44 68 145 358 879 2049 4523 9529 19316 37898 72239 134068 242563 428199 738117 1243439 2049028 3306272 5229557
8 6 4 2 0 -2 -4 -6 -8 -10 -12 -14 -16 -18 -20 -22 -24 -26 -28 -30 -32
17 41 73 118 193 335 623 1231 2534 5302 11045 22630 45413 89379 173266 332522 634427 1206099 2284773 4305170 8046541
-1 10 44 123 284 598 1217 2475 5095 10593 22028 45351 91829 182531 357015 690824 1331387 2571436 4996276 9771015 19183246
-3 8 34 72 130 238 455 883 1710 3323 6583 13481 28677 63005 141147 317725 709621 1558274 3345274 6999654 14258862
12 15 10 -1 -1 52 235 670 1534 3069 5592 9505 15305 23594 35089 50632 71200 97915 132054 175059 228547
18 37 70 126 234 459 930 1893 3812 7557 14740 28288 53376 98883 179580 319311 555486 945269 1573914 2565778 4098622
2 12 41 103 210 380 669 1241 2493 5265 11202 23415 47749 95290 187396 365834 713116 1392846 2728495 5354259 10497892
3 -2 -5 -7 -14 -36 -70 -54 221 1254 4045 10387 23252 47284 89412 159596 271719 444638 703407 1080685 1618342
23 40 68 121 220 404 756 1458 2903 5923 12249 25409 52398 106623 212837 415028 788519 1457858 2622426 4592057 7835336
6 3 5 23 72 163 291 419 458 243 -495 -2161 -5332 -10797 -19601 -33093 -52978 -81373 -120867 -174585 -246256
-8 2 25 61 110 172 247 335 436 550 677 817 970 1136 1315 1507 1712 1930 2161 2405 2662
14 25 51 110 223 421 774 1468 2968 6319 13657 29032 59689 118015 224444 411722 731074 1260989 2119551 3481498 5601491
8 27 69 157 321 595 1027 1725 2968 5429 10599 21587 44639 92035 187591 376965 746552 1457231 2802953 5309577 9897013
13 21 40 98 233 490 921 1598 2662 4447 7742 14304 27851 56024 114354 234353 479890 979752 1991106 4021230 8059042
`;

// test
const testData = `
0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45
`;
data = testData;

var lines = data.trim().split('\n').map(l => l.trim().split(' ').map(Number));
console.log(JSON.stringify(lines));

// functions
const zeroIn = (lines) => {
    var minusResult = [];
    lines.forEach(l => {
        let runArray = [];
        for(i=0; i<=l.length - 1; i++) {
            let x = i+1;
            runArray.push(parseInt(l[x]) - parseInt(l[i]));
        }
        runArray.pop();
        minusResult.push(runArray);
    });
    return minusResult;
};

const isNotZero = (lines) => {
    return [].concat(...lines).reduce((acc, c) => parseInt(acc) + parseInt(c)) > 0;
};

// run it
var result = lines;
while(isNotZero(result)) {
    result = zeroIn(result);
    console.log(JSON.stringify(result));
}
