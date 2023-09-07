var menu = [
    {
        name: '识字1',
        learn: [
            [
                {
                    name: '1.天地人',
                    img: 'assets/images/home/shizi1/1.tiandiren.png',
                    lessonId: 1,
                    lesson: {
                        xinshan: {
                            btn1: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/1.课文欣赏/1.识字/1.tiandiren.mp4'
                                        }
                                    ]
                                }
                            ],
                            btn2: [
                                {
                                    type: 'animateImg',
                                    content: [
                                        {
                                            img: [
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/天.png',
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/地.png',
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/人.png',
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/你.png',
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/我.png',
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/他.png'
                                            ],
                                            // 还没配
                                            audio: [
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/天.mp3',
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/地.mp3',
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/人.mp3',
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/你.mp3',
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/我.mp3',
                                                'assets/video/2.课文朗读/1.识字/1识字一一 天地人（课文朗读）/他.mp3'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                audio: '',
                                content: [
                                    {
                                        text: '天地人',
                                        video: 'assets/video/4.知识拓展/1.识字/1识字一一 天地人（知识拓展）.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '2.金木水火土',
                    img: 'assets/images/home/shizi1/2.jinmu.png',
                    lessonId: 2,
                    lesson: {
                        xinshan: {
                            btn1: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/1.课文欣赏/1.识字/2.jinmushuihuotu.mp4'
                                        }
                                    ]
                                }
                            ],
                            btn2: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/1.识字/2识字一二 金木水火土（课文朗读）/金木水火土.mp4'
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '金木水火土',
                                        video: 'assets/video/4.知识拓展/1.识字/2识字一二 金木水火土（知识拓展）.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '3.口耳目',
                    img: 'assets/images/home/shizi1/3.koumu.png',
                    lessonId: 3,
                    lesson: {
                        xinshan: {
                            btn1: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/1.课文欣赏/1.识字/3.kouermu.mp4'
                                        }
                                    ]
                                }
                            ],
                            btn2: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/1.识字/3识字一三 口耳目（课文朗读）.mp4'
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                //未完成 视频合并
                                type: 'zhishiFull',
                                audio: 'assets/video/2.课文朗读/1.识字/3识字一三 口耳目（课文朗读）/背景音乐.mp3',
                                content: [
                                    {
                                        text: '口耳目',
                                        video: 'assets/video/4.知识拓展/1.识字/3识字一三 口耳目（知识拓展）.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '4.日月水火',
                    img: 'assets/images/home/shizi1/4.shuihuo.png',
                    lessonId: 4,
                    lesson: {
                        xinshan: {
                            btn1: {
                                type: 'full',
                                content: [
                                    {
                                        video: 'assets/video/1.课文欣赏/1.识字/4.riyueshuihuo.mp4'
                                    }
                                ]
                            },
                            btn2: [
                                {
                                    type: 'videoAndAudio',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/4识字一四 日月水火（课文朗读）.mp4',
                                            audioBtns: [
                                                {
                                                    left: '20%',
                                                    top: '25%',
                                                    gif: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/GIF/1.日.gif',
                                                    audio: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/音频/1.日.mp3'
                                                },
                                                {
                                                    left: '40%',
                                                    top: '25%',
                                                    gif: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/GIF/2.水.gif',
                                                    audio: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/音频/2.水.mp3'
                                                },
                                                {
                                                    left: '84%',
                                                    top: '25%',
                                                    gif: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/GIF/3.山.gif',
                                                    audio: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/音频/3.山.mp3'
                                                },
                                                {
                                                    left: '21%',
                                                    top: '53%',
                                                    gif: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/GIF/4.田.gif',
                                                    audio: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/音频/4.田.mp3'
                                                },
                                                {
                                                    left: '64%',
                                                    top: '53%',
                                                    gif: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/GIF/5.月.gif',
                                                    audio: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/音频/5.月.mp3'
                                                },
                                                {
                                                    left: '85%',
                                                    top: '53%',
                                                    gif: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/GIF/6.火.gif',
                                                    audio: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/音频/6.火.mp3'
                                                },
                                                {
                                                    left: '85%',
                                                    top: '53%',
                                                    gif: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/GIF/7.石.gif',
                                                    audio: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/音频/7.石.mp3'
                                                },
                                                {
                                                    left: '85%',
                                                    top: '53%',
                                                    gif: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/GIF/8.禾.gif',
                                                    audio: 'assets/video/2.课文朗读/1.识字/4识字一四 日月水火（课文朗读）/音频/8.禾.mp3'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'controlRow',
                                audio: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/1.开场旁白：小朋友们，来看一看，我们神奇的汉字是怎么演变过来的吧.mp3',
                                content: [
                                    {
                                        text: '人',
                                        gif: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/1.人.gif',
                                        img: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/1.人.png',
                                        pandaStart: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/pandaStart.png'
                                    },
                                    {
                                        text: '耳',
                                        gif: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/2.耳.gif',
                                        img: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/2.耳.png',
                                        pandaStart: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/pandaStart.png'
                                    },
                                    {
                                        text: '首',
                                        gif: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/3.首.gif',
                                        img: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/3.首.png',
                                        pandaStart: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/pandaStart.png'
                                    }
                                ]
                            },
                            {
                                type: 'controlRow',
                                content: [
                                    {
                                        text: '止',
                                        gif: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/4.止.gif',
                                        img: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/4.止.png',
                                        pandaStart: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/pandaStart.png'
                                    },
                                    {
                                        text: '目',
                                        gif: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/5.目.gif',
                                        img: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/5.目.png',
                                        pandaStart: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/pandaStart.png'
                                    },
                                    {
                                        text: '又',
                                        gif: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/6.又.gif',
                                        img: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/6.又.png',
                                        pandaStart: 'assets/video/4.知识拓展/1.识字/4识字一四 日月水火（知识拓展）/pandaStart.png'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            [
                {
                    name: '5.对韵歌',
                    img: 'assets/images/home/shizi1/5.yunge.png',
                    lessonId: 5,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/1.识字/5.duiyunge.mp4',
                            btn2: [
                                {
                                    type: 'videoAndAudio',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/1.识字/5识字一五 对韵歌（课文朗读）/5识字一五 对韵歌（课文朗读）.mp4',
                                            audioBtns: [
                                                {
                                                    left: '20%',
                                                    top: '25%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/5识字一五 对韵歌（课文朗读）/音频/1.云.mp3'
                                                },
                                                {
                                                    left: '40%',
                                                    top: '25%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/5识字一五 对韵歌（课文朗读）/音频/2.雨.mp3'
                                                },
                                                {
                                                    left: '84%',
                                                    top: '25%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/5识字一五 对韵歌（课文朗读）/音频/3.风.mp3'
                                                },
                                                {
                                                    left: '21%',
                                                    top: '53%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/5识字一五 对韵歌（课文朗读）/音频/4.花.mp3'
                                                },
                                                {
                                                    left: '64%',
                                                    top: '53%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/5识字一五 对韵歌（课文朗读）/音频/5.鸟.mp3'
                                                },
                                                {
                                                    left: '85%',
                                                    top: '53%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/5识字一五 对韵歌（课文朗读）/音频/6.虫.mp3'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                audio: '',
                                content: [
                                    {
                                        text: '对韵歌',
                                        video: 'assets/video/4.知识拓展/1.识字/5识字一五 对韵歌（知识拓展）.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        ]
    },
    {
        name: '汉语拼音',
        learn: [
            [
                {
                    name: '1.a o e',
                    img: 'assets/images/home/pinyin/1.a.png',
                    lessonId: 1,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'aoe',
                                        video: 'assets/video/5.看一看/1.汉语拼音 一、aoe（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/1/0-1-2-1开场旁白：请小朋友们跟着读一读，还可以看看视频中的嘴型哟.mp3',
                                content: [
                                    {
                                        text: 'a',
                                        video1: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/1/a.mp4',
                                        img1: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/1/aoe文字0001.png',
                                        audio: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/1/张大嘴巴.mp3'
                                    },
                                    {
                                        text: 'o',
                                        video1: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/1/o.mp4',
                                        img1: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/1/aoe文字0002.png',
                                        audio: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/1/圆圆嘴巴.mp3'
                                    },
                                    {
                                        text: 'e',
                                        video1: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/1/e.mp4',
                                        img1: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/1/aoe文字0003.png',
                                        audio: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/1/扁扁嘴巴.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/2/0-1-2-2开场旁白：看看图片，你能自己编编口诀，记住这三个拼音字母吗.mp3',
                                click: '2',
                                content: [
                                    {
                                        text: 'a',
                                        img1: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/2/1-aoe文字20001.png',
                                        img2: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/2/1-aoe图片0001.jpg',
                                        audio: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/2/医生检查.mp3'
                                    },
                                    {
                                        text: 'o',
                                        img1: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/2/1-aoe文字20002.png',
                                        img2: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/2/1-aoe图片0002.jpg',
                                        audio: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/2/公鸡打鸣.mp3'
                                    },
                                    {
                                        text: 'e',
                                        img1: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/2/1-aoe文字20003.png',
                                        img2: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/2/1-aoe图片0003.jpg',
                                        audio: 'assets/video/6.听一听/1.汉语拼音 一、aoe（听一听）/2/白鹅戏水.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'bottomLine',
                                audio: 'assets/video/7.读一读/1-读一读-汉语拼音一-aoe/开场旁白：汉语拼音有四个音调，当韵母遇到他们，发音就不同了，让我们一起来跟着读一读吧.mp3',
                                content: [
                                    {
                                        text: 'a',
                                        video: 'assets/video/7.读一读/1-读一读-汉语拼音一-aoe/a.mp4',
                                        img: 'assets/video/7.读一读/1-读一读-汉语拼音一-aoe/1.a.png'
                                    },
                                    {
                                        text: 'o',
                                        video: 'assets/video/7.读一读/1-读一读-汉语拼音一-aoe/o.mp4',
                                        img: 'assets/video/7.读一读/1-读一读-汉语拼音一-aoe/2.o.png'
                                    },
                                    {
                                        text: 'e',
                                        video: 'assets/video/7.读一读/1-读一读-汉语拼音一-aoe/e.mp4',
                                        img: 'assets/video/7.读一读/1-读一读-汉语拼音一-aoe/3.e.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'full',
                                crossIntr: '1',
                                content: [
                                    {
                                        text: 'a o e',
                                        video: 'assets/video/8.写一写/1-汉语拼音-写一写aoe/1-汉语拼音-四线三格.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            },
                            {
                                type: 'doubleLine',
                                content: [
                                    {
                                        text: 'a',
                                        img1: 'assets/video/8.写一写/1-汉语拼音-写一写aoe/2.小字/1.a.png',
                                        img2: 'assets/video/8.写一写/1-汉语拼音-写一写aoe/3.GIF/1-汉语拼音-写一写动画a.gif',
                                        audio: 'assets/video/8.写一写/1-汉语拼音-写一写aoe/1.音频/1.笔画：a.mp3'
                                    },
                                    {
                                        text: 'o',
                                        img1: 'assets/video/8.写一写/1-汉语拼音-写一写aoe/2.小字/2.o.png',
                                        img2: 'assets/video/8.写一写/1-汉语拼音-写一写aoe/3.GIF/1-汉语拼音-写一写动画o.gif',
                                        audio: 'assets/video/8.写一写/1-汉语拼音-写一写aoe/1.音频/2.笔画：o.mp3'
                                    },
                                    {
                                        text: 'e',
                                        img1: 'assets/video/8.写一写/1-汉语拼音-写一写aoe/2.小字/3.e.png',
                                        img2: 'assets/video/8.写一写/1-汉语拼音-写一写aoe/3.GIF/1-汉语拼音-写一写动画e.gif',
                                        audio: 'assets/video/8.写一写/1-汉语拼音-写一写aoe/1.音频/3.笔画：e.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '2.i u ü y w',
                    img: 'assets/images/home/pinyin/2.i.png',
                    lessonId: 2,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'iuüyw',
                                        video: 'assets/video/5.看一看/2.汉语拼音 二、iuvyw（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                content: [
                                    {
                                        text: 'i',
                                        smallSize: 'singleSmall',
                                        video1: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/2-2-i_batch.mp4',
                                        video2: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/i.mp4',
                                        img1: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/2-iuvyw-字母0001.png'
                                    },
                                    {
                                        text: 'u',
                                        smallSize: 'singleSmall',
                                        video1: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/2-2-u_batch.mp4',
                                        video2: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/u.mp4',
                                        img1: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/2-iuvyw-字母0002.png'
                                    },
                                    {
                                        text: 'ü',
                                        smallSize: 'singleSmall',
                                        video1: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/2-2-v_batch.mp4',
                                        video2: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/v.mp4',
                                        img1: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/2-iuvyw-字母0003.png'
                                    },
                                    {
                                        text: 'y',
                                        smallSize: 'singleSmall',
                                        video1: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/2-2-y_batch.mp4',
                                        video2: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/y.mp4',
                                        img1: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/2-iuvyw-字母0004.png'
                                    },
                                    {
                                        text: 'w',
                                        smallSize: 'singleSmall',
                                        video1: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/2-2-w_batch.mp4',
                                        video2: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/w.mp4',
                                        img1: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/1/2-iuvyw-字母0005.png'
                                    }
                                ]
                            },
                            {
                                type: 'controlFull',
                                audio: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/2/0-2-2-2开场旁白：小朋友们，iuv和y姐姐，w哥哥还发生了有趣的故事.mp3',
                                content: [
                                    {
                                        text: 'yiwuyv',
                                        video: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/2/2-yiwuyv故事_batch.mp4',
                                        btnImg: 'assets/images/kantingduxie/pandaStart.png',
                                        img: 'assets/images/kantingduxie/beijing.png'
                                    }
                                ]
                            },
                            {
                                type: 'bigRow',
                                audio: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/3/0-2-2-3开场旁白.mp3',
                                content: [
                                    {
                                        text: 'yi',
                                        img: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/3/2-iuvyw-字母0006.png',
                                        audio: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/3/0-2-2-3-yi.mp3'
                                    },
                                    {
                                        text: 'wu',
                                        img: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/3/2-iuvyw-字母0007.png',
                                        audio: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/3/0-2-2-3-wu.mp3'
                                    },
                                    {
                                        text: 'yü',
                                        img: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/3/2-iuvyw-字母0008.png',
                                        audio: 'assets/video/6.听一听/2.汉语拼音 二、iuvyw（听一听）/3/0-2-2-3-yu.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'bottomLine',
                                audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/1.栏目1/0-2-3-1开场旁白：汉语拼音有四个音调，当韵母遇到他们，发音就不同了，让我们一起来跟着读一读吧.mp3',
                                content: [
                                    {
                                        text: 'i',
                                        video: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/1.栏目1/i.mp4',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/1.栏目1/2-iuvyw-字母0001.png',
                                        audio: ''
                                    },
                                    {
                                        text: 'u',
                                        video: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/1.栏目1/u.mp4',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/1.栏目1/2-iuvyw-字母0002.png',
                                        audio: ''
                                    },
                                    {
                                        text: 'e',
                                        video: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/1.栏目1/v.mp4',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/1.栏目1/2-iuvyw-字母0003.png',
                                        audio: ''
                                    }
                                ]
                            },
                            {
                                type: 'blockGroup',
                                audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/0-2-3-2开场旁白：这些整体认读音节你能读准确吗？请你读一读.mp3',
                                content: [
                                    {
                                        text: 'i',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/1-i-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/1-i-1.mp3'
                                    },
                                    {
                                        text: 'i',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/1-i-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/1-i-2.mp3'
                                    },
                                    {
                                        text: 'i',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/1-i-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/1-i-3.mp3'
                                    },
                                    {
                                        text: 'i',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/1-i-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/1-i-4.mp3'
                                    },
                                    {
                                        text: 'u',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/3-u-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/3-u-1.mp3'
                                    },
                                    {
                                        text: 'u',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/3-u-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/3-u-2.mp3'
                                    },
                                    {
                                        text: 'u',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/3-u-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/3-u-3.mp3'
                                    },
                                    {
                                        text: 'u',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/3-u-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/3-u-4.mp3'
                                    },
                                    {
                                        text: 'ü',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/5-v-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/5-v-1.mp3'
                                    },
                                    {
                                        text: 'ü',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/5-v-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/5-v-2.mp3'
                                    },
                                    {
                                        text: 'ü',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/5-v-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/5-v-3.mp3'
                                    },
                                    {
                                        text: 'ü',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/5-v-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/5-v-4.mp3'
                                    },
                                    {
                                        text: 'yi',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/2-yi-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/2-yi-1.mp3'
                                    },
                                    {
                                        text: 'yi',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/2-yi-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/2-yi-2.mp3'
                                    },
                                    {
                                        text: 'yi',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/2-yi-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/2-yi-3.mp3'
                                    },
                                    {
                                        text: 'yi',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/2-yi-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/2-yi-4.mp3'
                                    },
                                    {
                                        text: 'wu',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/4-wu-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/4-wu-1.mp3'
                                    },
                                    {
                                        text: 'wu',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/4-wu-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/4-wu-2.mp3'
                                    },
                                    {
                                        text: 'wu',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/4-wu-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/4-wu-3.mp3'
                                    },
                                    {
                                        text: 'wu',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/4-wu-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/4-wu-4.mp3'
                                    },
                                    {
                                        text: 'yu',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/6-yu-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/6-yu-1.mp3'
                                    },
                                    {
                                        text: 'yu',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/6-yu-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/6-yu-2.mp3'
                                    },
                                    {
                                        text: 'yu',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/6-yu-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/6-yu-3.mp3'
                                    },
                                    {
                                        text: 'yu',
                                        img1: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/6-yu-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/2.栏目2/音频/6-yu-4.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'blockLine',
                                audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/0-2-3-3开场旁白：请你随便点一个，能读准确吗？.mp3',
                                content: [
                                    {
                                        text: 'i',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/1-i-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/i.mp3'
                                    },
                                    {
                                        text: 'yu',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/2-yu-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/yu-3.mp3'
                                    },
                                    {
                                        text: 'ü',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/3-v-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/v-4.mp3'
                                    },
                                    {
                                        text: 'yi',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/4-yi-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/yi-3.mp3'
                                    },
                                    {
                                        text: 'i',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/5-i-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/i-2.mp3'
                                    },
                                    {
                                        text: 'u',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/6-u-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/u-3.mp3'
                                    },
                                    {
                                        text: 'i',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/7-i-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/i-3.mp3'
                                    },
                                    {
                                        text: 'i',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/8-i-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/i-4.mp3'
                                    },
                                    {
                                        text: 'yu',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/9-yu-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/yu-2.mp3'
                                    },
                                    {
                                        text: 'yi',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/10-yi-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/yi-1.mp3'
                                    },
                                    {
                                        text: 'ü',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/11-v-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/v-1.mp3'
                                    },
                                    {
                                        text: 'wu',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/12-wu-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/wu-1.mp3'
                                    },
                                    {
                                        text: 'yu',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/13-yu-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/yu-1.mp3'
                                    },
                                    {
                                        text: 'wu',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/14-wu-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/wu-3.mp3'
                                    },
                                    {
                                        text: 'yi',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/15-yi-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/yi-4.mp3'
                                    },
                                    {
                                        text: 'u',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/16-v-1.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/u-1.mp3'
                                    },
                                    {
                                        text: 'ü',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/17-v-3.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/v-3.mp3'
                                    },
                                    {
                                        text: 'yi',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/18-yi-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/yi-2.mp3'
                                    },
                                    {
                                        text: 'wu',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/19-wu-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/wu-4.mp3'
                                    },
                                    {
                                        text: 'u',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/20-u-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/u-2.mp3'
                                    },
                                    {
                                        text: 'u',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/21-u-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/u-4.mp3'
                                    },
                                    {
                                        text: 'yu',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/22-yu-4.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/yu-4.mp3'
                                    },
                                    {
                                        text: 'wu',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/23-wu-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/wu-2.mp3'
                                    },
                                    {
                                        text: 'ü',
                                        img: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/24-v-2.png',
                                        audio: 'assets/video/7.读一读/2-读一读-汉语拼音二-iuvyw/3.栏目3/配音/v-2.mp3'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                content: [
                                    {
                                        text: 'i',
                                        img1: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/2.小字/1.i.png',
                                        img2: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/3.GIF/1-汉语拼音-写一写-i.gif',
                                        audio: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/1.音频/1.i.mp3'
                                    },
                                    {
                                        text: 'u',
                                        img1: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/2.小字/2.u.png',
                                        img2: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/3.GIF/1-汉语拼音-写一写-u.gif',
                                        audio: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/1.音频/2.u.mp3'
                                    },
                                    {
                                        text: 'ü',
                                        img1: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/2.小字/3.v.png',
                                        img2: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/3.GIF/1-汉语拼音-写一写-v.gif',
                                        audio: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/1.音频/3.v.mp3'
                                    },
                                    {
                                        text: 'y',
                                        img1: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/2.小字/4.y.png',
                                        img2: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/3.GIF/1-汉语拼音-写一写-y.gif',
                                        audio: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/1.音频/4.y.mp3'
                                    },
                                    {
                                        text: 'w',
                                        img1: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/2.小字/5.w.png',
                                        img2: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/3.GIF/1-汉语拼音-写一写-w.gif',
                                        audio: 'assets/video/8.写一写/2-汉语拼音-写一写iuvyw/1.音频/5.w.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '3.b p m f',
                    img: 'assets/images/home/pinyin/3.b.png',
                    lessonId: 3,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'bpmf',
                                        video: 'assets/video/5.看一看/3.汉语拼音 三、bomf（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/0-3-2-1开场旁白：请小朋友跟着读一读，还可以看看视频中的口型哟.mp3',
                                content: [
                                    {
                                        text: 'b',
                                        video1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/b.mp4',
                                        img1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/3-1-字母0001.png',
                                        audio: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/右下圆圈.mp3'
                                    },
                                    {
                                        text: 'p',
                                        video1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/p.mp4',
                                        img1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/3-1-字母0002.png',
                                        audio: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/右上圆圈.mp3'
                                    },
                                    {
                                        text: 'm',
                                        video1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/m.mp4',
                                        img1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/3-1-字母0003.png',
                                        audio: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/两个门洞.mp3'
                                    },
                                    {
                                        text: 'f',
                                        video1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/f.mp4',
                                        img1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/3-1-字母0004.png',
                                        audio: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/1/一根拐杖.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/0-3-2-2开场旁白：看看图片，你能自己编编口诀，记住这三个拼音字母吗.mp3',
                                click: '2',
                                content: [
                                    {
                                        text: 'b',
                                        img1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/3-2-字母0001.png',
                                        img2: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/3-1-图片0001.png',
                                        smallSize: 'small',
                                        audio: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/听广播.mp3'
                                    },
                                    {
                                        text: 'p',
                                        img1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/3-2-字母0002.png',
                                        img2: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/3-1-图片0002.png',
                                        smallSize: 'small',
                                        audio: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/爬山坡.mp3'
                                    },
                                    {
                                        text: 'm',
                                        img1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/3-2-字母0003.png',
                                        img2: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/3-1-图片0003.png',
                                        smallSize: 'small',
                                        audio: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/摸鱼儿.mp3'
                                    },
                                    {
                                        text: 'f',
                                        img1: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/3-2-字母0004.png',
                                        img2: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/3-1-图片0004.png',
                                        smallSize: 'small',
                                        audio: 'assets/video/6.听一听/3.汉语拼音 三、bomf（听一听）/2/看大佛.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'bottom',
                                audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1.开场旁白：拼音时声母读的轻而短，韵母读的重而长，两音相碰，就能读出音节了，快来试一试吧.mp3',
                                content: [
                                    {
                                        text: 'ba',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/1.b-a.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0001.png'
                                    },
                                    {
                                        text: 'bo',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/2.b-o.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0002.png'
                                    },
                                    {
                                        text: 'bi',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/3.b-i.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0003.png'
                                    },
                                    {
                                        text: 'bu',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/4.b-u.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0004.png'
                                    },
                                    {
                                        text: 'pa',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/5.p-a.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0005.png'
                                    },
                                    {
                                        text: 'po',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/6.p-o.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0006.png'
                                    },
                                    {
                                        text: 'pi',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/7.p-i.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0007.png'
                                    },
                                    {
                                        text: 'pu',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/8.p-u.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0008.png'
                                    },
                                    {
                                        text: 'ma',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/9.m-a.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0009.png'
                                    },
                                    {
                                        text: 'mo',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/10.m-o.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0010.png'
                                    },
                                    {
                                        text: 'mi',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/11.m-i.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0011.png'
                                    },
                                    {
                                        text: 'mu',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/12.m-u.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0012.png'
                                    },
                                    {
                                        text: 'fa',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/13.f-a.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0013.png'
                                    },
                                    {
                                        text: 'fo',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/14.f-o.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0014.png'
                                    },
                                    {
                                        text: 'fu',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/MP4/15.f-u.mp4',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/1.栏目1/1-读一读-汉语拼音-字母0015.png'
                                    }
                                ]
                            },
                            {
                                type: 'bottomImg',
                                audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/1.开场旁白：韵母带上声调了，你会拼吗？请你试一试吧.mp3',
                                content: [
                                    {
                                        text: 'ba',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/1-读一读-汉语拼音-字母0016.png',
                                        img2: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/1-读一读-汉语拼音-tupian0001.jpg',
                                        audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/b-a-ba 猪八戒.mp3'
                                    },
                                    {
                                        text: 'ba',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/1-读一读-汉语拼音-字母0017.png',
                                        img2: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/1-读一读-汉语拼音-tupian0002.jpg',
                                        audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/b-a-ba 拔萝卜.mp3'
                                    },
                                    {
                                        text: 'ba',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/1-读一读-汉语拼音-字母0018.png',
                                        img2: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/1-读一读-汉语拼音-tupian0003.jpg',
                                        audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/b-a-ba 打靶.mp3'
                                    },
                                    {
                                        text: 'ba',
                                        img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/1-读一读-汉语拼音-字母0019.png',
                                        img2: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/1-读一读-汉语拼音-tupian0004.jpg',
                                        audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/2.栏目2/b-a-ba 大坝.mp3'
                                    }

                                ]
                            },
                            // {
                            //     type: 'intrImg',
                            //     content: [
                            //         {
                            //             text: 'bpmf',
                            //             img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/Image 91.jpg',
                            //             clickItem: [
                            //                 {
                            //                     top: '',
                            //                     left: '',
                            //                     width: '',
                            //                     height: '',
                            //                     audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/1-妈妈.mp3',
                            //                     img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/2-妈妈.png'
                            //                 },
                            //                 {
                            //                     top: '',
                            //                     left: '',
                            //                     width: '',
                            //                     height: '',
                            //                     audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/1-爸爸.mp3',
                            //                     img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/2-爸爸.png'
                            //                 },
                            //                 {
                            //                     top: '',
                            //                     left: '',
                            //                     width: '',
                            //                     height: '',
                            //                     audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/1-我.mp3',
                            //                     img: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/2-我.png'
                            //                 }
                            //             ]
                            //         }
                            //     ]
                            // },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        text: 'bpmf',
                                        video: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/3.mp4',
                                        clickItem: [
                                            {
                                                top: '23%',
                                                left: '53%',
                                                width: '14%',
                                                height: '12%',
                                                audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/1-妈妈.mp3'
                                            },
                                            {
                                                width: '12%',
                                                height: '12%',
                                                top: '23%',
                                                left: '28%',
                                                audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/1-爸爸.mp3'
                                            },
                                            {
                                                top: '61%',
                                                left: '77%',
                                                width: '12%',
                                                height: '11%',
                                                audio: 'assets/video/7.读一读/3-读一读-汉语拼音三-bomf/3.栏目3/1-我.mp3'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                content: [
                                    {
                                        text: 'b',
                                        img1: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/2.小字/1.b.png',
                                        img2: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/3.GIF/1-汉语拼音-写一写-b.gif',
                                        audio: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/1.音频/1.b.mp3'
                                    },
                                    {
                                        text: 'p',
                                        img1: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/2.小字/2.p.png',
                                        img2: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/3.GIF/1-汉语拼音-写一写-p.gif',
                                        audio: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/1.音频/2.p.mp3'
                                    },
                                    {
                                        text: 'm',
                                        img1: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/2.小字/3.m.png',
                                        img2: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/3.GIF/1-汉语拼音-写一写-m.gif',
                                        audio: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/1.音频/3.m.mp3'
                                    },
                                    {
                                        text: 'f',
                                        img1: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/2.小字/4.f.png',
                                        img2: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/3.GIF/1-汉语拼音-写一写-f.gif',
                                        audio: 'assets/video/8.写一写/3-汉语拼音-写一写bomf/1.音频/4.f.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '4.d t n l',
                    img: 'assets/images/home/pinyin/4.d.png',
                    lessonId: 4,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'dtnl',
                                        video: 'assets/video/5.看一看/4.汉语拼音 四、dtnl（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/0-4-2-1开场旁白：请小朋友们跟着读一读，还可以看看视频中的嘴型哟.mp3',
                                content: [
                                    {
                                        text: 'd',
                                        video1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/d.mp4',
                                        img1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/4-1-字母0001.png',
                                        audio: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/左下半圆d.mp3'
                                    },
                                    {
                                        text: 't',
                                        video1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/t.mp4',
                                        img1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/4-1-字母0002.png',
                                        audio: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/伞柄朝上.mp3'
                                    },
                                    {
                                        text: 'n',
                                        video1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/n.mp4',
                                        img1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/4-1-字母0003.png',
                                        audio: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/一个门洞.mp3'
                                    },
                                    {
                                        text: 'l',
                                        video1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/l.mp4',
                                        img1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/4-1-字母0004.png',
                                        audio: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/1/像根鼓棒.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/0-4-2-2开场旁白：看看图片，你能自己编编口诀，记住这三个拼音字母吗.mp3',
                                click: '2',
                                content: [
                                    {
                                        text: 'd',
                                        img1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/4-2-字母0001.png',
                                        img2: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/4-1-图片0001.jpg',
                                        audio: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/鼓棒敲鼓.mp3'
                                    },
                                    {
                                        text: 't',
                                        img1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/4-2-字母0002.png',
                                        img2: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/4-1-图片0002.jpg',
                                        audio: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/鱼儿跳舞.mp3'
                                    },
                                    {
                                        text: 'n',
                                        img1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/4-2-字母0003.png',
                                        img2: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/4-1-图片0003.jpg',
                                        audio: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/像个城门.mp3'
                                    },
                                    {
                                        text: 'l',
                                        img1: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/4-2-字母0004.png',
                                        img2: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/4-1-图片0004.jpg',
                                        audio: 'assets/video/6.听一听/4.汉语拼音 四、dtnl（听一听）/2/木棍赶猪.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'bottom',
                                audio: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1.开场旁白：拼音时声母读的轻而短，韵母读的重而长，两音相碰，就能读出音节了，快来试一试吧.mp3',
                                content: [
                                    {
                                        text: 'de',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/1.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0020.png'
                                    },
                                    {
                                        text: 'da',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/2.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0021.png'
                                    },
                                    {
                                        text: 'di',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/3.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0022.png'
                                    },
                                    {
                                        text: 'du',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/4.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0023.png'
                                    },
                                    {
                                        text: 'te',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/5.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0024.png'
                                    },
                                    {
                                        text: 'ta',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/6.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0025.png'
                                    },
                                    {
                                        text: 'ti',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/7.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0026.png'
                                    },
                                    {
                                        text: 'tu',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/8.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0027.png'
                                    },
                                    {
                                        text: 'nu',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/9.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0028.png'
                                    },
                                    {
                                        text: 'gua',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/10.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0029.png'
                                    },
                                    {
                                        text: 'na',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/11.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0030.png'
                                    },
                                    {
                                        text: 'ne',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/12.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0031.png'
                                    },
                                    {
                                        text: 'ni',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/13.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0032.png'
                                    },
                                    {
                                        text: 'lu',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/14.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0033.png'
                                    },
                                    {
                                        text: 'huo',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/15.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0034.png'
                                    },
                                    {
                                        text: 'la',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/16.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0035.png'
                                    },
                                    {
                                        text: 'le',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/17.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0036.png'
                                    },
                                    {
                                        text: 'li',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/MP4/18.mp4',
                                        img: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/1.栏目1/1-读一读-汉语拼音-字母0037.png'
                                    }
                                ]
                            },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        text: 'dtnl',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/2.栏目2/4.mp4',
                                        clickItem: [
                                            {
                                                top: '50%',
                                                left: '50%',
                                                width: '11%',
                                                height: '13%',
                                                audio: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/2.栏目2/马路.mp3'
                                            },
                                            {
                                                top: '41%',
                                                left: '34%',
                                                width: '11%',
                                                height: '13%',
                                                audio: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/2.栏目2/泥土.mp3'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'stillControlFull',
                                content: [
                                    {
                                        text: 'dtnl',
                                        video: 'assets/video/7.读一读/4-读一读-汉语拼音四-dtnl/3.栏目3/4.汉语拼音 四、dtnl（读一读）-3.mp4',
                                        btnImg: 'assets/images/kantingduxie/start.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                content: [
                                    {
                                        text: 'd',
                                        img1: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/2.小字/1.d.png',
                                        img2: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/3.GIF/1-汉语拼音-写一写-d.gif',
                                        audio: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/1.音频/1.d.mp3'
                                    },
                                    {
                                        text: 't',
                                        img1: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/2.小字/2.t.png',
                                        img2: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/3.GIF/1-汉语拼音-写一写-t.gif',
                                        audio: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/1.音频/2.t.mp3'
                                    },
                                    {
                                        text: 'n',
                                        img1: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/2.小字/3.n.png',
                                        img2: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/3.GIF/1-汉语拼音-写一写-n.gif',
                                        audio: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/1.音频/3.n.mp3'
                                    },
                                    {
                                        text: 'l',
                                        img1: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/2.小字/4.l.png',
                                        img2: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/3.GIF/1-汉语拼音-写一写-l.gif',
                                        audio: 'assets/video/8.写一写/4-汉语拼音-写一写dtnl/1.音频/4.l.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            [
                {
                    name: '5.g k h',
                    img: 'assets/images/home/pinyin/5.g.png',
                    lessonId: 5,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'gkh',
                                        video: 'assets/video/5.看一看/5.汉语拼音 五、gkh（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/1/0-5-2-1开场旁白：请小朋友们跟着读一读，还可以看看视频中的嘴型哟.mp3',
                                content: [
                                    {
                                        text: 'g',
                                        video1: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/1/g.mp4',
                                        img1: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/1/5-1-文字0001.png',
                                        audio: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/1/小白鸽-g.mp3'
                                    },
                                    {
                                        text: 'k',
                                        video1: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/1/k.mp4',
                                        img1: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/1/5-1-文字0002.png',
                                        audio: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/1/小蝌蚪-k.mp3'
                                    },
                                    {
                                        text: 'h',
                                        video1: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/1/h.mp4',
                                        img1: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/1/5-1-文字0003.png',
                                        audio: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/1/喝开水-h.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/2/0-5-2-2开场旁白：看看图片，你能自己编编口诀，记住这3个字母吗.mp3',
                                click: '2',
                                content: [
                                    {
                                        text: 'g',
                                        img1: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/2/5-2-文字0001.png',
                                        img2: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/2/5-2-图片0001.jpg',
                                        audio: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/2/像个9字-ggg.mp3'
                                    },
                                    {
                                        text: 'k',
                                        img1: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/2/5-2-文字0002.png',
                                        img2: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/2/5-2-图片0002.jpg',
                                        audio: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/2/像挺机枪-kkk.mp3'
                                    },
                                    {
                                        text: 'h',
                                        img1: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/2/5-2-文字0003.png',
                                        img2: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/2/5-2-图片0003.jpg',
                                        audio: 'assets/video/6.听一听/5.汉语拼音 五、gkh（听一听）/2/像把椅子-hhh.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'bottom',
                                audio: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1.开场旁白：拼音时声母读的轻而短，韵母读的重而长，拼读三拼音节，中间的介母，要读的轻一点，快一点哟.mp3',
                                content: [
                                    {
                                        text: 'ga',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/1.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0038.png'
                                    },
                                    {
                                        text: 'ge',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/2.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0039.png'
                                    },
                                    {
                                        text: 'gu',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/3.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0040.png'
                                    },
                                    {
                                        text: 'ka',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/4.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0041.png'
                                    },
                                    {
                                        text: 'ke',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/5.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0042.png'
                                    },
                                    {
                                        text: 'ku',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/6.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0043.png'
                                    },
                                    {
                                        text: 'ha',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/7.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0044.png'
                                    },
                                    {
                                        text: 'he',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/8.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0045.png'
                                    },
                                    {
                                        text: 'hu',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/9.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0046.png'
                                    },
                                    {
                                        text: 'gua',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/10.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0047.png'
                                    },
                                    {
                                        text: 'kua',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/11.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0048.png'
                                    },
                                    {
                                        text: 'hua',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/12.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0049.png'
                                    },
                                    {
                                        text: 'guo',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/13.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0050.png'
                                    },
                                    {
                                        text: 'kuo',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/14.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0051.png'
                                    },
                                    {
                                        text: 'huo',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/MP4/15.mp4',
                                        img: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/1.栏目1/1-读一读-汉语拼音-字母0052.png'
                                    }
                                ]
                            },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        text: 'gkh',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/2.栏目2/5.mp4',
                                        clickItem: [
                                            {
                                                top: '59%',
                                                left: '64%',
                                                width: '13%',
                                                height: '17%',
                                                audio: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/2.栏目2/打鼓.mp3'
                                            },
                                            {
                                                top: '34%',
                                                left: '48%',
                                                width: '13%',
                                                height: '16%',
                                                audio: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/2.栏目2/画画.mp3'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'stillControlFull',
                                content: [
                                    {
                                        text: 'gkh',
                                        video: 'assets/video/7.读一读/5-读一读-汉语拼音五-gkh/3.栏目3/5-读一读-汉语拼音五-1_batch.mp4',
                                        btnImg: 'assets/images/kantingduxie/start.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                content: [
                                    {
                                        text: 'g',
                                        img1: 'assets/video/8.写一写/5-汉语拼音-写一写gkh/2.小字/1.g.png',
                                        img2: 'assets/video/8.写一写/5-汉语拼音-写一写gkh/3.GIF/1-汉语拼音-写一写-g.gif',
                                        audio: 'assets/video/8.写一写/5-汉语拼音-写一写gkh/1.音频/1.g.mp3'
                                    },
                                    {
                                        text: 'k',
                                        img1: 'assets/video/8.写一写/5-汉语拼音-写一写gkh/2.小字/2.k.png',
                                        img2: 'assets/video/8.写一写/5-汉语拼音-写一写gkh/3.GIF/1-汉语拼音-写一写-k.gif',
                                        audio: 'assets/video/8.写一写/5-汉语拼音-写一写gkh/1.音频/2.k.mp3'
                                    },
                                    {
                                        text: 'h',
                                        img1: 'assets/video/8.写一写/5-汉语拼音-写一写gkh/2.小字/3.h.png',
                                        img2: 'assets/video/8.写一写/5-汉语拼音-写一写gkh/3.GIF/1-汉语拼音-写一写-h.gif',
                                        audio: 'assets/video/8.写一写/5-汉语拼音-写一写gkh/1.音频/3.h.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '6.j q x',
                    img: 'assets/images/home/pinyin/6.j.png',
                    lessonId: 6,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'jqx',
                                        video: 'assets/video/5.看一看/6.汉语拼音 六、jqx（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/0-6-2-1开场旁白：请小朋友们看看图片记一记.mp3',
                                content: [
                                    {
                                        text: 'j',
                                        video1: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/j.mp4',
                                        img1: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/6-1-文字0001.png',
                                        img2: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/6-1-图片0001.jpg',
                                        audio: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/一只公鸡-j.mp3'
                                    },
                                    {
                                        text: 'q',
                                        video1: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/q.mp4',
                                        img1: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/6-1-文字0002.png',
                                        img2: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/6-1-图片0002.jpg',
                                        audio: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/七只气球-q.mp3'
                                    },
                                    {
                                        text: 'x',
                                        video1: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/x.mp4',
                                        img1: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/6-1-文字0003.png',
                                        img2: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/6-1-图片0003.jpg',
                                        audio: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/1/切开西瓜-x.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'controlFull',
                                audio: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/2/0-6-2-2开场旁白：小朋友们，jqx找朋友的故事可好听了，快来听一听吧.mp3',
                                content: [
                                    {
                                        text: 'jqx',
                                        video: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/2/6-1-jqx动画_batch.mp4',
                                        img: 'assets/images/kantingduxie/beijing.png',
                                        btnImg: 'assets/images/kantingduxie/pandaStart.png',
                                        audio: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/2/开场旁白：小朋友们，jqx找朋友的故事可好听了，快来听一听吧.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/3/0-6-2--3开场旁白：小朋友们，要知道，jqx和u不见面.mp3',
                                content: [
                                    {
                                        text: 'j',
                                        img1: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/3/6-1-文字0004.png',
                                        audio: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/3/j-v-ju.mp3'
                                    },
                                    {
                                        text: 'q',
                                        img1: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/3/6-1-文字0005.png',
                                        audio: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/3/q-v-qu.mp3'
                                    },
                                    {
                                        text: 'x',
                                        img1: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/3/6-1-文字0006.png',
                                        audio: 'assets/video/6.听一听/6.汉语拼音 六、jqx（听一听）/3/x-v-xu.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'bottom',
                                audio: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/1.开场旁白：拼音时声母读的轻而短，韵母读的重而长，两音相碰，就成音节了，拼读三拼音节，中间的介母，要读的轻一点，快一点哟.mp3',
                                content: [
                                    {
                                        text: 'ji',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/MP4/1.mp4',
                                        img: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/1-读一读-汉语拼音-字母0053.png'
                                    },
                                    {
                                        text: 'qi',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/MP4/2.mp4',
                                        img: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/1-读一读-汉语拼音-字母0054.png'
                                    },
                                    {
                                        text: 'xi',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/MP4/3.mp4',
                                        img: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/1-读一读-汉语拼音-字母0055.png'
                                    },
                                    {
                                        text: 'jia',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/MP4/4.mp4',
                                        img: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/1-读一读-汉语拼音-字母0056.png'
                                    },
                                    {
                                        text: 'qia',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/MP4/5.mp4',
                                        img: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/1-读一读-汉语拼音-字母0057.png'
                                    },
                                    {
                                        text: 'xia',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/MP4/6.mp4',
                                        img: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/1-读一读-汉语拼音-字母0058.png'
                                    },
                                    {
                                        text: 'ju',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/MP4/7.mp4',
                                        img: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/1-读一读-汉语拼音-字母0059.png'
                                    },
                                    {
                                        text: 'qu',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/MP4/8.mp4',
                                        img: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/1-读一读-汉语拼音-字母0060.png'
                                    },
                                    {
                                        text: 'xu',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/MP4/9.mp4',
                                        img: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/1.栏目1/1-读一读-汉语拼音-字母0061.png'
                                    }
                                ]
                            },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        text: 'jqx',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/2.栏目2/6.mp4',
                                        clickItem: [
                                            {
                                                top: '23%',
                                                left: '29%',
                                                width: '13%',
                                                height: '17%',
                                                audio: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/2.栏目2/下棋.mp3'
                                            },
                                            {
                                                top: '22%',
                                                left: '50%',
                                                width: '21%',
                                                height: '19%',
                                                audio: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/2.栏目2/搭积木.mp3'

                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'stillControlFull',
                                content: [
                                    {
                                        text: 'jqx',
                                        video: 'assets/video/7.读一读/6-读一读-汉语拼音六-jqx/3.栏目3/6-读一读-汉语拼音六-1_batch.mp4',
                                        btnImg: 'assets/images/kantingduxie/start.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                content: [
                                    {
                                        text: 'j',
                                        img1: 'assets/video/8.写一写/6-汉语拼音-写一写jqx/2.小字/1.j.png',
                                        img2: 'assets/video/8.写一写/6-汉语拼音-写一写jqx/3.GIF/1-汉语拼音-写一写-j.gif',
                                        audio: 'assets/video/8.写一写/6-汉语拼音-写一写jqx/1.音频/1.j.mp3'
                                    },
                                    {
                                        text: 'q',
                                        img1: 'assets/video/8.写一写/6-汉语拼音-写一写jqx/2.小字/2.q.png',
                                        img2: 'assets/video/8.写一写/6-汉语拼音-写一写jqx/3.GIF/1-汉语拼音-写一写-q.gif',
                                        audio: 'assets/video/8.写一写/6-汉语拼音-写一写jqx/1.音频/2.q.mp3'
                                    },
                                    {
                                        text: 'x',
                                        img1: 'assets/video/8.写一写/6-汉语拼音-写一写jqx/2.小字/3.x.png',
                                        img2: 'assets/video/8.写一写/6-汉语拼音-写一写jqx/3.GIF/1-汉语拼音-写一写-x.gif',
                                        audio: 'assets/video/8.写一写/6-汉语拼音-写一写jqx/1.音频/3.x.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '7.z c s',
                    img: 'assets/images/home/pinyin/7.z.png',
                    lessonId: 7,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'zcs',
                                        video: 'assets/video/5.看一看/7.汉语拼音 七、zcs（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/1/0-7-2-1开场旁白：请小朋友跟着口诀读一读，还可以看看视频中的口型哟.mp3',
                                content: [
                                    {
                                        text: 'z',
                                        video1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/1/z.mp4',
                                        img1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/1/7-1-文字0001.png',
                                        audio: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/1/像个2字-Z.mp3'
                                    },
                                    {
                                        text: 'c',
                                        video1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/1/c.mp4',
                                        img1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/1/7-1-文字0002.png',
                                        audio: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/1/半个圆圈-C.mp3'
                                    },
                                    {
                                        text: 's',
                                        video1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/1/s.mp4',
                                        img1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/1/7-1-文字0003.png',
                                        audio: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/1/半个8字-S.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'controlFull',
                                audio: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/2/0-7-2-2开场旁白：zcs三个声母要完成拼音王国的一个任务.mp3',
                                content: [
                                    {
                                        text: 'zcs',
                                        video: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/2/7-1-zcs动画_batch.mp4',
                                        btnImg: 'assets/images/kantingduxie/pandaStart.png',
                                        img: 'assets/images/kantingduxie/beijing.png',
                                        audio: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/2/开场旁白：zcs三个声母要完成拼音王国的一个任务.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'splitBlock',
                                audio: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/0-7-2-3开场旁白：请你听一听，声母和整体认读音节有什么不同.mp3',
                                content: [
                                    {
                                        text: 'z',
                                        img1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/7-2-文字0001.png',
                                        splitImg: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/7-2-文字0007.png',
                                        img2: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/7-2-文字0002.png',
                                        audio1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/z.mp3',
                                        audio2: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/zi.mp3'
                                    },
                                    {
                                        text: 'c',
                                        img1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/7-2-文字0003.png',
                                        splitImg: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/7-2-文字0007.png',
                                        img2: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/7-2-文字0004.png',
                                        audio1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/c.mp3',
                                        audio2: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/ci.mp3'
                                    },
                                    {
                                        text: 's',
                                        img1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/7-2-文字0005.png',
                                        splitImg: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/7-2-文字0007.png',
                                        img2: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/7-2-文字0006.png',
                                        audio1: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/s.mp3',
                                        audio2: 'assets/video/6.听一听/7.汉语拼音 七、zcs（听一听）/3/si.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'block',
                                audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1.开场旁白：整体认读音节4声练习开始了.mp3',
                                content: [
                                    {
                                        text: 'zi',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0062.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/zi-1.mp3'
                                    },
                                    {
                                        text: 'zi',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0063.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/zi-2.mp3'
                                    },
                                    {
                                        text: 'zi',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0064.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/zi-3.mp3'
                                    },
                                    {
                                        text: 'zi',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0065.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/zi-4.mp3'
                                    },
                                    {
                                        text: 'ci',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0066.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/ci-1.mp3'
                                    },
                                    {
                                        text: 'ci',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0067.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/ci-2.mp3'
                                    },
                                    {
                                        text: 'ci',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0068.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/ci-3.mp3'
                                    },
                                    {
                                        text: 'ci',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0069.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/ci-4.mp3'
                                    },
                                    {
                                        text: 'si',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0070.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/si-1.mp3'
                                    },
                                    {
                                        text: 'si',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0071.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/si-2.mp3'
                                    },
                                    {
                                        text: 'si',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0072.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/si-3.mp3'
                                    },
                                    {
                                        text: 'si',
                                        img1: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/1-读一读-汉语拼音-字母0073.png',
                                        audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/1.栏目1/声音/si-4.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'bottom',
                                audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1.开场旁白：拼音时声母读的轻而短，韵母读的重而长，两音相碰，就成音节了，拼读三拼音节，中间的介母，要读的轻一点，快一点哟.mp3',
                                content: [
                                    {
                                        text: 'za',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/1.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0074.png'
                                    },
                                    {
                                        text: 'ze',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/2.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0075.png'
                                    },
                                    {
                                        text: 'zu',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/3.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0076.png'
                                    },
                                    {
                                        text: 'zuo',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/4.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0077.png'
                                    },
                                    {
                                        text: 'ca',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/5.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0078.png'
                                    },
                                    {
                                        text: 'ce',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/6.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0079.png'
                                    },
                                    {
                                        text: 'cu',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/7.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0080.png'
                                    },
                                    {
                                        text: 'cuo',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/8.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0081.png'
                                    },
                                    {
                                        text: 'sa',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/9.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0082.png'
                                    },
                                    {
                                        text: 'se',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/10.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0083.png'
                                    },
                                    {
                                        text: 'su',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/11.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0084.png'
                                    },
                                    {
                                        text: 'suo',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/MP4/12.mp4',
                                        img: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/2.栏目2/1-读一读-汉语拼音-字母0085.png'
                                    }
                                ]
                            },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        text: 'zcs',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/3.栏目3/7.mp4',
                                        clickItem: [
                                            {
                                                top: '13%',
                                                left: '67%',
                                                width: '20%',
                                                height: '17%',
                                                audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/3.栏目3/1字.mp3'
                                            },
                                            {
                                                top: '31%',
                                                left: '67%',
                                                width: '20%',
                                                height: '17%',
                                                audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/3.栏目3/2词语.mp3'
                                            },
                                            {
                                                top: '49%',
                                                left: '67%',
                                                width: '20%',
                                                height: '17%',
                                                audio: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/3.栏目3/3句子.mp3'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'stillControlFull',
                                content: [
                                    {
                                        text: 'zcs',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/4.栏目4/7-读一读-汉语拼音七-1_batch.mp4',
                                        btnImg: 'assets/images/kantingduxie/start.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                content: [
                                    {
                                        text: 'z',
                                        img1: 'assets/video/8.写一写/7-汉语拼音-写一写zcs/2.小字/1.z.png',
                                        img2: 'assets/video/8.写一写/7-汉语拼音-写一写zcs/3.GIF/1-汉语拼音-写一写-z.gif',
                                        audio: 'assets/video/8.写一写/7-汉语拼音-写一写zcs/1.音频/1.z.mp3'
                                    },
                                    {
                                        text: 'c',
                                        img1: 'assets/video/8.写一写/7-汉语拼音-写一写zcs/2.小字/2.c.png',
                                        img2: 'assets/video/8.写一写/7-汉语拼音-写一写zcs/3.GIF/1-汉语拼音-写一写-c.gif',
                                        audio: 'assets/video/8.写一写/7-汉语拼音-写一写zcs/1.音频/2.c.mp3'
                                    },
                                    {
                                        text: 's',
                                        img1: 'assets/video/8.写一写/7-汉语拼音-写一写zcs/2.小字/3.s.png',
                                        img2: 'assets/video/8.写一写/7-汉语拼音-写一写zcs/3.GIF/1-汉语拼音-写一写-s.gif',
                                        audio: 'assets/video/8.写一写/7-汉语拼音-写一写zcs/1.音频/3.s.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '8.zh ch sh r',
                    img: 'assets/images/home/pinyin/8.zh.png',
                    lessonId: 8,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'zh ch sh r',
                                        video: 'assets/video/5.看一看/8.汉语拼音 八、zh ch sh r（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/0-8-2-1开场旁白：请小朋友跟着口诀读一读，还可以看看视频中的口型哟.mp3',
                                content: [
                                    {
                                        text: 'zh',
                                        video1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/1.妈妈织毛衣-zh/zh.mp4',
                                        img1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/1.妈妈织毛衣-zh/1.妈妈织毛衣-zh.png',
                                        img2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/1.妈妈织毛衣-zh/1.妈妈织毛衣-zh.jpg',
                                        audio: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/1.妈妈织毛衣-zh/1.妈妈织毛衣-zh.mp3'
                                    },
                                    {
                                        text: 'ch',
                                        video1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/2.弟弟吃苹果/ch.mp4',
                                        img1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/2.弟弟吃苹果/2.弟弟吃苹果.png',
                                        img2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/2.弟弟吃苹果/2.弟弟吃苹果.jpg',
                                        audio: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/2.弟弟吃苹果/2.弟弟吃苹果.mp3'
                                    },
                                    {
                                        text: 'sh',
                                        video1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/3.老师读古诗-sh/sh.mp4',
                                        img1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/3.老师读古诗-sh/3.老师读古诗-sh.png',
                                        img2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/3.老师读古诗-sh/3.老师读古诗-sh.jpg',
                                        audio: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/3.老师读古诗-sh/3.老师读古诗-sh.mp3'
                                    },
                                    {
                                        text: 'r',
                                        video1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/4.红日照幼苗/r.mp4',
                                        img1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/4.红日照幼苗/4.红日照幼苗.png',
                                        img2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/4.红日照幼苗/4.红日照幼苗.jpg',
                                        audio: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/1/4.红日照幼苗/4.红日照幼苗.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'full',
                                audio: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/2/0-8-2-2-开场旁白：zh ch sh r四个声母也要完成拼音王国里的一个任务.mp3',
                                content: [
                                    {
                                        text: 'zh ch sh r',
                                        video: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/2/8.汉语拼音 八、zh ch sh r（听一听）-2.mp4',
                                        audio: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/2/开场旁白：zh ch sh r四个声母也要完成拼音王国里的一个任务.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'splitBlock',
                                audio: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/0-8-2-3开场旁白：小朋友们，现在我们有七位整体认读音节朋友在执行任务。.mp3',
                                content: [
                                    {
                                        text: 'zh',
                                        img1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/zh.png',
                                        splitImg: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/7-2-文字0007.png',
                                        img2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/zhi.png',
                                        audio1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/zh.mp3',
                                        audio2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/zhi.mp3'
                                    },
                                    {
                                        text: 'ch',
                                        img1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/ch.png',
                                        splitImg: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/7-2-文字0007.png',
                                        img2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/chi.png',
                                        audio1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/ch.mp3',
                                        audio2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/chi.mp3'
                                    },
                                    {
                                        text: 'sh',
                                        img1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/sh.png',
                                        splitImg: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/7-2-文字0007.png',
                                        img2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/shi.png',
                                        audio1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/sh.mp3',
                                        audio2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/shi.mp3'
                                    },
                                    {
                                        text: 'r',
                                        img1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/r.png',
                                        splitImg: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/7-2-文字0007.png',
                                        img2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/ri.png',
                                        audio1: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/r.mp3',
                                        audio2: 'assets/video/6.听一听/8.汉语拼音 八、zh ch sh r（听一听）/3/ri.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'block',
                                audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1.开场旁白：整体认读音节4声练习开始了.mp3',
                                content: [
                                    {
                                        text: 'zhi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0086.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/zhi-1.mp3'
                                    },
                                    {
                                        text: 'zhi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0087.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/zhi-2.mp3'
                                    },
                                    {
                                        text: 'zhi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0088.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/zhi-3.mp3'
                                    },
                                    {
                                        text: 'zhi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0089.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/zhi-4.mp3'
                                    },
                                    {
                                        text: 'chi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0090.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/chi-1.mp3'
                                    },
                                    {
                                        text: 'chi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0091.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/chi-2.mp3'
                                    },
                                    {
                                        text: 'chi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0092.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/chi-3.mp3'
                                    },
                                    {
                                        text: 'chi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0093.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/chi-4.mp3'
                                    },
                                    {
                                        text: 'shi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0094.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/shi-1.mp3'
                                    },
                                    {
                                        text: 'shi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0095.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/shi-2.mp3'
                                    },
                                    {
                                        text: 'shi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0096.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/shi-3.mp3'
                                    },
                                    {
                                        text: 'shi',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0097.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/shi-4.mp3'
                                    },
                                    {
                                        text: 'ri',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0098.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/ri-1.mp3'
                                    },
                                    {
                                        text: 'ri',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0099.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/ri-2.mp3'
                                    },
                                    {
                                        text: 'ri',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0100.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/ri-3.mp3'
                                    },
                                    {
                                        text: 'ri',
                                        img1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/1-读一读-汉语拼音-字母0101.png',
                                        audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/1.栏目1/声音/ri-4.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'bottom',
                                audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1.开场旁白：拼音时声母读的轻而短，韵母读的重而长，两音相碰，就成音节了，拼读三拼音节，中间的介母，要读的轻一点，快一点哟.mp3',
                                content: [
                                    {
                                        text: 'zha',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/1.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0102.png'
                                    },
                                    {
                                        text: 'zhe',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/2.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0103.png'
                                    },
                                    {
                                        text: 'zhu',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/3.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0104.png'
                                    },
                                    {
                                        text: 'zhuo',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/4.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0105.png'
                                    },
                                    {
                                        text: 'cha',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/5.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0106.png'
                                    },
                                    {
                                        text: 'che',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/6.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0107.png'
                                    },
                                    {
                                        text: 'chu',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/7.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0108.png'
                                    },
                                    {
                                        text: 'chuo',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/8.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0109.png'
                                    },
                                    {
                                        text: 'sha',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/9.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0110.png'
                                    },
                                    {
                                        text: 'she',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/10.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0111.png'
                                    },
                                    {
                                        text: 'shu',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/11.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0112.png'
                                    },
                                    {
                                        text: 'shuo',
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/MP4/12.mp4',
                                        img: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/2.栏目2/1-读一读-汉语拼音-字母0112.png'
                                    }
                                ]
                            },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        video: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/3.栏目3/8.mp4',
                                        clickItem: [
                                            {
                                                top: '13%',
                                                left: '32%',
                                                width: '23%',
                                                height: '16%',
                                                audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/3.栏目3/擦桌子.mp3'
                                            },
                                            {
                                                top: '28%',
                                                left: '77%',
                                                width: '17%',
                                                height: '16%',
                                                audio: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/3.栏目3/折纸.mp3'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'selectControlFull',
                                content: [
                                    {
                                        text: 'zh ch sh r',
                                        video1: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/4.栏目4/1.绕口令（慢速）.mp4',
                                        slowImg: 'assets/images/kantingduxie/slowImg.png',
                                        video2: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/4.栏目4/2.绕口令（中速）.mp4',
                                        middleImg: 'assets/images/kantingduxie/middleImg.png',
                                        video3: 'assets/video/7.读一读/8-读一读-汉语拼音八-zh ch sh r/4.栏目4/3.绕口令（快速）.mp4',
                                        fastImg: 'assets/images/kantingduxie/fastImg.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                count: '2',
                                content: [
                                    {
                                        text: 'zh',
                                        img1: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/2.小字/1.zh.png',
                                        img2: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/3.GIF/1-汉语拼音-写一写-zh.gif',
                                        audio: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/1.音频/1.zh.mp3'
                                    },
                                    {
                                        text: 'ch',
                                        img1: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/2.小字/2.ch.png',
                                        img2: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/3.GIF/1-汉语拼音-写一写-ch.gif',
                                        audio: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/1.音频/2.ch.mp3'
                                    },
                                    {
                                        text: 'sh',
                                        img1: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/2.小字/3.sh.png',
                                        img2: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/3.GIF/1-汉语拼音-写一写-sh.gif',
                                        audio: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/1.音频/3.sh.mp3'
                                    },
                                    {
                                        text: 'r',
                                        img1: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/2.小字/4.r.png',
                                        img2: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/3.GIF/1-汉语拼音-写一写-r.gif',
                                        audio: 'assets/video/8.写一写/8-汉语拼音-写一写zh ch sh r/1.音频/4.r.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            [
                {
                    name: '9.ai ei ui',
                    img: 'assets/images/home/pinyin/9.ai.png',
                    lessonId: 9,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'ai ei ui',
                                        video: 'assets/video/5.看一看/9.汉语拼音 九、ai ei ui（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/0-9-2-1开场旁白：请小朋友们跟着读一读，还可以看看视频中的嘴型哟.mp3',
                                content: [
                                    {
                                        text: 'ai',
                                        video1: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/ai.mp4',
                                        img1: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/比高矮.png',
                                        img2: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/比高矮.jpg',
                                        audio: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/比高矮-ai.mp3'
                                    },
                                    {
                                        text: 'ei',
                                        video1: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/ei.mp4',
                                        img1: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/砍危树.png',
                                        img2: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/砍危树.jpg',
                                        audio: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/砍危树-ei.mp3'
                                    },
                                    {
                                        text: 'ui',
                                        video1: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/ui.mp4',
                                        img1: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/围围巾.png',
                                        img2: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/围围巾.jpg',
                                        audio: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/1/围围巾-ui.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'full',
                                audio: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/2/1.开场旁白：复韵母标调时该标在哪一个韵母上呢，让我们来读一读这首标调歌吧.mp3',
                                content: [
                                    {
                                        text: 'ai ei ui',
                                        video: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/2/9.mp4',
                                        img: '',
                                        audio: 'assets/video/6.听一听/9.汉语拼音 九、ai ei ui（听一听）/2/开场旁白：复韵母标调时该标在哪一个韵母上呢，让我们来读一读这首标调歌吧.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'block',
                                audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1.开场旁白：小朋友们，在读复韵母的时候，要注意口型是有变化的哟，从前一个字母快速滑到后一个字母，一气呵成，跟我读.mp3',
                                content: [
                                    {
                                        text: 'ai',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0114.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ai-1.mp3'
                                    },
                                    {
                                        text: 'ai',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0115.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ai-2.mp3'
                                    },
                                    {
                                        text: 'ai',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0116.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ai-3.mp3'
                                    },
                                    {
                                        text: 'ai',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0117.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ai-4.mp3'
                                    },
                                    {
                                        text: 'ei',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0118.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ei-1.mp3'
                                    },
                                    {
                                        text: 'ei',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0119.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ei-2.mp3'
                                    },
                                    {
                                        text: 'ei',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0120.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ei-3.mp3'
                                    },
                                    {
                                        text: 'ei',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0121.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ei-4.mp3'
                                    },
                                    {
                                        text: 'ui',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0122.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ui-1.mp3'
                                    },
                                    {
                                        text: 'ui',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0123.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ui-2.mp3'
                                    },
                                    {
                                        text: 'ui',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0124.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ui-3.mp3'
                                    },
                                    {
                                        text: 'ui',
                                        img1: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/1-读一读-汉语拼音-字母0125.png',
                                        audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/1.栏目1/音频/ui-4.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'bottom',
                                audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1.开场旁白：拼音时声母读的轻而短，韵母读的重而长，两音相碰，就成音节了，碰到三拼音，介母读的轻而短一点哟.mp3',
                                content: [
                                    {
                                        text: 'dai',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/1.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0126.png'
                                    },
                                    {
                                        text: 'tai',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/2.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0127.png'
                                    },
                                    {
                                        text: 'nai',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/3.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0128.png'
                                    },
                                    {
                                        text: 'lai',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/4.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0129.png'
                                    },
                                    {
                                        text: 'bei',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/5.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0130.png'
                                    },
                                    {
                                        text: 'pei',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/6.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0131.png'
                                    },
                                    {
                                        text: 'mai',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/7.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0132.png'
                                    },
                                    {
                                        text: 'fei',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/8.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0133.png'
                                    },
                                    {
                                        text: 'zhui',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/9.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0134.png'
                                    },
                                    {
                                        text: 'chui',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/10.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0135.png'
                                    },
                                    {
                                        text: 'shui',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/11.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0136.png'
                                    },
                                    {
                                        text: 'rui',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/12.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0137.png'
                                    },
                                    {
                                        text: 'guai',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/13.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0138.png'
                                    },
                                    {
                                        text: 'huai',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/14.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0139.png'
                                    },
                                    {
                                        text: 'kuai',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/MP4/15.mp4',
                                        img: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/2.栏目2/1-读一读-汉语拼音-字母0140.png'
                                    }
                                ]
                            },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/3.栏目3/9.mp4',
                                        clickItem: [
                                            {
                                                top: '25%',
                                                left: '76%',
                                                width: '20%',
                                                height: '18%',
                                                audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/3.栏目3/奶奶.mp3'
                                            },
                                            {
                                                top: '14%',
                                                left: '30%',
                                                width: '18%',
                                                height: '20%',
                                                audio: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/3.栏目3/妹妹.mp3'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'stillControlFull',
                                content: [
                                    {
                                        text: 'zcs',
                                        video: 'assets/video/7.读一读/9-读一读-汉语拼音八-ai ei iu/4.栏目4/9-读一读-汉语拼音九-1_batch.mp4',
                                        btnImg: 'assets/images/kantingduxie/start.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                count: '2',
                                content: [
                                    {
                                        text: 'ai',
                                        img1: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/2.小字/1.ai.png',
                                        img2: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/3.GIF/1-汉语拼音-写一写-ai.gif',
                                        audio: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/1.音频/1.ai.mp3'
                                    },
                                    {
                                        text: 'ei',
                                        img1: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/2.小字/2.ei.png',
                                        img2: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/3.GIF/1-汉语拼音-写一写-ei.gif',
                                        audio: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/1.音频/2.ei.mp3'
                                    },
                                    {
                                        text: 'ui',
                                        img1: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/2.小字/3.ui.png',
                                        img2: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/3.GIF/1-汉语拼音-写一写-ui.gif',
                                        audio: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/1.音频/3.ui.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'doubleLine',
                                count: 'ciyuPinyin',
                                content: [
                                    {
                                        text: 'paidui',
                                        img1: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/2.小字/4.paidui.png',
                                        img2: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/3.GIF/paidui.gif',
                                        audio: 'assets/video/8.写一写/9-汉语拼音-写一写ai ei ui/1.音频/4.paidui.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '10.ao ou iu',
                    img: 'assets/images/home/pinyin/10.ao.png',
                    lessonId: 10,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'ao ou iu',
                                        video: 'assets/video/5.看一看/10.汉语拼音 十、ao ou iu（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/1/0-10-2-1开场旁白：小朋友，让我们一起来读一读吧.mp3',
                                content: [
                                    {
                                        text: 'ao',
                                        video1: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/1/ao.mp4',
                                        img1: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/1/凹凸不平-ao.png',
                                        audio: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/1/凹凸不平-ao.mp3'
                                    },
                                    {
                                        text: 'ou',
                                        video1: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/1/ou.mp4',
                                        img1: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/1/欧洲大陆-ou.png',
                                        audio: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/1/欧洲大陆-ou.mp3'
                                    },
                                    {
                                        text: 'iu',
                                        video1: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/1/iu.mp4',
                                        img1: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/1/有点多多-iu.png',
                                        audio: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/1/有点多多-iu.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'row',
                                click: '2',
                                content: [
                                    {
                                        text: 'ao',
                                        img1: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/2/奥运五环-ao-ao-ao.png',
                                        img2: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/2/奥运五环-ao-ao-ao.jpg',
                                        audio: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/2/奥运五环-ao ao ao.mp3'
                                    },
                                    {
                                        text: 'ou',
                                        img1: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/2/海鸥飞翔-ou-ou-ou.png',
                                        img2: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/2/海鸥飞翔-ou-ou-ou.jpg',
                                        audio: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/2/海鸥飞翔-ou ou ou.mp3'
                                    },
                                    {
                                        text: 'iu',
                                        img1: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/2/游泳健将-iu-iu-iu.png',
                                        img2: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/2/游泳健将-iu-iu-iu.jpg',
                                        audio: 'assets/video/6.听一听/10.汉语拼音 十、ao ou iu（听一听）/2/游泳健将-iu iu iu.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'block',
                                audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1.开场旁白：拼音时声母读的轻而短，韵母读的重而长，两音相碰，就成音节了，碰到三拼音，介母读的轻而短一点哟.mp3',
                                content: [
                                    {
                                        text: 'ao',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0141.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ao-1.mp3'
                                    },
                                    {
                                        text: 'ao',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0142.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ao-2.mp3'
                                    },
                                    {
                                        text: 'ao',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0143.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ao-3.mp3'
                                    },
                                    {
                                        text: 'ao',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0144.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ao-4.mp3'
                                    },
                                    {
                                        text: 'ou',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0145.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ou-1.mp3'
                                    },
                                    {
                                        text: 'ou',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0146.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ou-2.mp3'
                                    },
                                    {
                                        text: 'ou',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0147.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ou-3.mp3'
                                    },
                                    {
                                        text: 'ou',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0148.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ou-4.mp3'
                                    },
                                    {
                                        text: 'iu',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0149.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/iu-1.mp3'
                                    },
                                    {
                                        text: 'iu',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0150.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/iu-2.mp3'
                                    },
                                    {
                                        text: 'iu',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0151.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/iu-3.mp3'
                                    },
                                    {
                                        text: 'iu',
                                        img1: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/1-读一读-汉语拼音-字母0152.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/iu-4.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'bottomFlower',
                                audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/3.栏目3/1.开场旁白：小朋友，请你看看这幅图，你能用自己的话说一说，你看到了什么嘛？.mp3',
                                content: [
                                    {
                                        text: 'ao',
                                        img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-ao.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ao-1.mp3',
                                        flower: [
                                            {
                                                text: 'niao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-1-niao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/1-1-niao.mp4'
                                            },
                                            {
                                                text: 'tiao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-2-tiao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/1-2-tiao.mp4'
                                            },
                                            {
                                                text: 'zao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-3-zao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/1-3-zao.mp4'
                                            },
                                            {
                                                text: 'rao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-4-rao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/1-4-rao.mp4'
                                            },
                                            {
                                                text: 'yao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-5-yao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/1-5-yao.mp4'
                                            },
                                            {
                                                text: 'shao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-6-shao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/1-6-shao.mp4'
                                            }
                                        ]
                                    },
                                    {
                                        text: 'ou',
                                        img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/2-ou.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ou-1.mp3',
                                        flower: [
                                            {
                                                text: 'tou',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/2-1-tou.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/2-1-tou.mp4'
                                            },
                                            {
                                                text: 'rou',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/2-2-rou.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/2-2-rou.mp4'
                                            },
                                            {
                                                text: 'kou',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/2-3-kou.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/2-3-kou.mp4'
                                            },
                                            {
                                                text: 'shou',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/2-4-shou.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/2-4-shou.mp4'
                                            },
                                            {
                                                text: 'zou',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/2-5-zou.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/2-5-zou.mp4'
                                            },
                                            {
                                                text: 'chou',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/2-6-chou.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/2-6-chou.mp4'
                                            },
                                            {
                                                text: 'lou',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/2-7-lou.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/2-7-lou.mp4'
                                            }
                                        ]
                                    },
                                    {
                                        text: 'iu',
                                        img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-iu.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/iu-1.mp3',
                                        flower: [
                                            {
                                                text: 'qiu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-1-qiu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/3-1-qiu.mp4'
                                            },
                                            {
                                                text: 'jiu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-2-jiu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/3-2-jiu.mp4'
                                            },
                                            {
                                                text: 'xiu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-3-xiu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/3-3-xiu.mp4'
                                            },
                                            {
                                                text: 'niu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-4-niu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/3-4-niu.mp4'
                                            },
                                            {
                                                text: 'liu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-5-liu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/3-5-liu.mp4'
                                            },
                                            {
                                                text: 'diu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-6-diu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/3-6-diu.mp4'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/3.栏目3/10.mp4',
                                        clickItem: [
                                            {
                                                top: '40%',
                                                left: '47%',
                                                width: '12%',
                                                height: '14%',
                                                audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/3.栏目3/小桥.mp3'
                                            },
                                            {
                                                top: '55%',
                                                left: '51%',
                                                width: '13%',
                                                height: '13%',
                                                audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/3.栏目3/流水.mp3'
                                            },
                                            {
                                                top: '31%',
                                                left: '62%',
                                                width: '14%',
                                                height: '13%',
                                                audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/3.栏目3/垂柳.mp3'
                                            },
                                            {
                                                top: '69%',
                                                left: '42%',
                                                width: '13%',
                                                height: '13%',
                                                audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/3.栏目3/桃花.mp3'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'stillControlFull',
                                content: [
                                    {
                                        text: 'zcs',
                                        video: 'assets/video/7.读一读/7-读一读-汉语拼音七-zcs/4.栏目4/7-读一读-汉语拼音七-1_batch.mp4',
                                        btnImg: 'assets/images/kantingduxie/start.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                count: '2',
                                content: [
                                    {
                                        text: 'ao',
                                        img1: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/2.小字/1.ao.png',
                                        img2: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/3.GIF/1-汉语拼音-写一写-ao.gif',
                                        audio: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/1.音频/1.ao.mp3'
                                    },
                                    {
                                        text: 'uo',
                                        img1: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/2.小字/2.ou.png',
                                        img2: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/3.GIF/1-汉语拼音-写一写-ou.gif',
                                        audio: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/1.音频/2.ou.mp3'
                                    },
                                    {
                                        text: 'iu',
                                        img1: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/2.小字/3.iu.png',
                                        img2: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/3.GIF/1-汉语拼音-写一写-iu.gif',
                                        audio: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/1.音频/3.iu.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'doubleLine',
                                count: 'ciyuPinyin',
                                content: [
                                    {
                                        text: 'xiaoniu',
                                        img1: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/2.小字/4.xiaoniu.png',
                                        img2: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/3.GIF/xiaoniu.gif',
                                        audio: 'assets/video/8.写一写/10-汉语拼音-写一写ao ou iu/1.音频/4.xiaoniu.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '11.ie üe er',
                    img: 'assets/images/home/pinyin/11.ie.png',
                    lessonId: 11,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'ie ve er',
                                        video: 'assets/video/5.看一看/11.汉语拼音 十一、ie ve er（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/0-11-2-1开场旁白：请小朋友们跟着读一读，还可以看看视频中的嘴型哟.mp3',
                                content: [
                                    {
                                        text: 'ie',
                                        video1: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/ie.mp4',
                                        img1: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/一棵椰树-ie-ie-ie.png',
                                        img2: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/一棵椰树-ie-ie-ie.jpg',
                                        audio: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/一棵椰树-ie-ie-ie.mp3'
                                    },
                                    {
                                        text: 'üe',
                                        video1: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/ve.mp4',
                                        img1: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/一轮圆月-ve-ve-ve.png',
                                        img2: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/一轮圆月-ve-ve-ve.jpg',
                                        audio: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/一轮圆月-ve-ve-ve.mp3'
                                    },
                                    {
                                        text: 'er',
                                        video1: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/er.mp4',
                                        img1: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/一阵风儿-er-er-er.png',
                                        img2: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/一阵风儿-er-er-er.jpg',
                                        audio: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/1/一阵风儿-er-er-er.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'controlFull',
                                audio: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/2/0-11-2-2开场旁白：韵母成为整体认读音节，由谁来带领他们呢，让我们来看一看吧.mp3',
                                content: [
                                    {
                                        text: 'ie üe er',
                                        video: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/2/11.汉语拼音 十一、ie ve er（听一听）-2.mp4',
                                        btnImg: 'assets/images/kantingduxie/pandaStart.png',
                                        img: 'assets/images/kantingduxie/beijing.png',
                                        audio: 'assets/video/6.听一听/11.汉语拼音 十一、ie ve er（听一听）/2/开场旁白：韵母成为整体认读音节，由谁来带领他们呢，让我们来看一看吧.mp3'
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'block',
                                audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1.开场旁白：小朋友们，在读复韵母的时候，要注意口型是有变化的哟，从前一个字母快速滑到后一个字母，一气呵成，跟我读.mp3',
                                content: [
                                    {
                                        text: 'ie',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0175.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/ie-1.mp3'
                                    },
                                    {
                                        text: 'ie',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0176.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/ie-2.mp3'
                                    },
                                    {
                                        text: 'ie',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0177.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/ie-3.mp3'
                                    },
                                    {
                                        text: 'ie',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0178.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/ie-4.mp3'
                                    },
                                    {
                                        text: 'üe',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0179.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/ve-1.mp3'
                                    },
                                    {
                                        text: 'üe',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0180.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/ve-2.mp3'
                                    },
                                    {
                                        text: 'üe',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0181.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/ve-3.mp3'
                                    },
                                    {
                                        text: 'üe',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0182.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/ve-4.mp3'
                                    },
                                    {
                                        text: 'er',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0183.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/er-1.mp3'
                                    },
                                    {
                                        text: 'er',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0184.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/er-2.mp3'
                                    },
                                    {
                                        text: 'er',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0185.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/er-3.mp3'
                                    },
                                    {
                                        text: 'er',
                                        img1: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/1-读一读-汉语拼音-字母0186.png',
                                        audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/1.栏目1/er-4.mp3'
                                    }
                                ]
                            },
                            // 还没配
                            {
                                type: 'bottomShot',
                                audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/2.栏目2/1.开场旁白：拼音时声母读的轻而短，韵母读的重而长，两音相碰，就成音节了，碰到三拼音，介母读的轻而短一点哟.mp3',
                                content: [
                                    {
                                        text: 'ao',
                                        img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-ao.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/ao-1.mp3',
                                        shot: [
                                            {
                                                text: 'niao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-1-niao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/1.mp4'
                                            },
                                            {
                                                text: 'tiao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-2-tiao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/6.mp4'
                                            },
                                            {
                                                text: 'zao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-3-zao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/5.mp4'
                                            },
                                            {
                                                text: 'rao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-4-rao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/4.mp4'
                                            },
                                            {
                                                text: 'yao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-5-yao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/3.mp4'
                                            },
                                            {
                                                text: 'shao',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/1-6-shao.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/2.mp4'
                                            }
                                        ]
                                    },
                                    {
                                        text: 'iu',
                                        img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-iu.png',
                                        audio: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/1.栏目1/iu-1.mp3',
                                        shot: [
                                            {
                                                text: 'qiu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-1-qiu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/14.mp4'
                                            },
                                            {
                                                text: 'jiu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-2-jiu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/19.mp4'
                                            },
                                            {
                                                text: 'xiu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-3-xiu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/18.mp4'
                                            },
                                            {
                                                text: 'niu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-4-niu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/17.mp4'
                                            },
                                            {
                                                text: 'liu',
                                                img: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/3-5-liu.png',
                                                video: 'assets/video/7.读一读/10-读一读-汉语拼音十-ao ou iu/2.栏目2/MP4/16.mp4'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        video: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/3.栏目3/11.mp4',
                                        clickItem: [
                                            {
                                                top: '9%',
                                                left: '32%',
                                                width: '12%',
                                                height: '14%',
                                                audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/3.栏目3/夜色.mp3'
                                            },
                                            {
                                                top: '60%',
                                                left: '78%',
                                                width: '15%',
                                                height: '15%',
                                                audio: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/3.栏目3/雪花.mp3'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'stillControlFull',
                                content: [
                                    {
                                        text: 'ie üe er',
                                        video: 'assets/video/7.读一读/11-读一读-汉语拼音十一-ie ve er/4.栏目4/11-读一读-汉语拼音十一-1.mp4',
                                        btnImg: 'assets/images/kantingduxie/start.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                count: '2',
                                content: [
                                    {
                                        text: 'ie',
                                        img1: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/2.小字/1.ie.png',
                                        img2: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/3.GIF/1-汉语拼音-写一写-ie.gif',
                                        audio: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/1.音频/1.ie.mp3'
                                    },
                                    {
                                        text: 'üe',
                                        img1: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/2.小字/2.ve.png',
                                        img2: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/3.GIF/1-汉语拼音-写一写-ve.gif',
                                        audio: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/1.音频/2.ve.mp3'
                                    },
                                    {
                                        text: 'er',
                                        img1: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/2.小字/3.er.png',
                                        img2: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/3.GIF/1-汉语拼音-写一写-er.gif',
                                        audio: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/1.音频/3.er.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'doubleLine',
                                count: 'ciyuPinyin',
                                content: [
                                    {
                                        text: 'xiezuoye',
                                        img1: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/2.小字/4.xiezuoye.png',
                                        img2: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/3.GIF/xiezuoye.gif',
                                        audio: 'assets/video/8.写一写/11-汉语拼音-写一写ie ve er/1.音频/4.xiezuoye.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '12.an en in un ün',
                    img: 'assets/images/home/pinyin/12.an.png',
                    lessonId: 12,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'an en in un vn ün',
                                        video: 'assets/video/5.看一看/12.汉语拼音 十二、an en in un vn（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/0-12-2-1开场旁白：请小朋友们跟着读一读，还可以看看视频中的嘴型哟.mp3',
                                content: [
                                    {
                                        text: 'an',
                                        video1: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/an.mp4',
                                        img1: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/天安门-an.png',
                                        img2: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/天安门-an.jpg',
                                        audio: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/天安门-an.mp3'
                                    },
                                    {
                                        text: 'en',
                                        video1: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/en.mp4',
                                        img1: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/摁门铃-en.png',
                                        img2: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/摁门铃-en.jpg',
                                        audio: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/摁门铃-en.mp3'
                                    },
                                    {
                                        text: 'in',
                                        video1: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/in.mp4',
                                        img1: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/树荫下-in.png',
                                        img2: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/树荫下-in.jpg',
                                        audio: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/树荫下-in.mp3'
                                    },
                                    {
                                        text: 'un',
                                        video1: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/un.mp4',
                                        img1: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/花蚊子-un.png',
                                        img2: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/花蚊子-un.jpg',
                                        audio: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/花蚊子-un.mp3'
                                    },
                                    {
                                        text: 'ün',
                                        video1: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/vu.mp4',
                                        img1: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/白云飘-vn.png',
                                        img2: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/白云飘-vn.jpg',
                                        audio: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/1/白云飘-vn.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'controlFull',
                                content: [
                                    {
                                        text: 'an en in un vn ün',
                                        video: 'assets/video/6.听一听/12.汉语拼音 十二、an en in un vn（听一听）/2/12.汉语拼音 十二、an en in un vn（听一听）-2.mp4',
                                        btnImg: 'assets/images/kantingduxie/pandaStart.png',
                                        img: 'assets/images/kantingduxie/beijing.png',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'block',
                                audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1.开场旁白：小朋友们，请跟我读，an en in un vn ,现在我们给这些前鼻音韵母标上声调.mp3',
                                content: [
                                    {
                                        text: 'an',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0200.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/an-1.mp3'
                                    },
                                    {
                                        text: 'an',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0201.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/an-2.mp3'
                                    },
                                    {
                                        text: 'an',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0202.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/an-3.mp3'
                                    },
                                    {
                                        text: 'an',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0203.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/an-4.mp3'
                                    },
                                    {
                                        text: 'en',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0204.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/en-1.mp3'
                                    },
                                    {
                                        text: 'en',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0205.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/en-2.mp3'
                                    },
                                    {
                                        text: 'en',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0206.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/en-3.mp3'
                                    },
                                    {
                                        text: 'en',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0207.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/en-4.mp3'
                                    },
                                    {
                                        text: 'in',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0208.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/in-1.mp3'
                                    },
                                    {
                                        text: 'in',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0209.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/in-2.mp3'
                                    },
                                    {
                                        text: 'in',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0210.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/in-3.mp3'
                                    },
                                    {
                                        text: 'in',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0211.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/in-4.mp3'
                                    },
                                    {
                                        text: 'un',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0212.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/un-1.mp3'
                                    },
                                    {
                                        text: 'un',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0213.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/un-2.mp3'
                                    },
                                    {
                                        text: 'un',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0214.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/un-3.mp3'
                                    },
                                    {
                                        text: 'un',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0215.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/un-4.mp3'
                                    },
                                    {
                                        text: 'ün',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0216.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/vn-1.mp3'
                                    },
                                    {
                                        text: 'ün',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0217.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/vn-2.mp3'
                                    },
                                    {
                                        text: 'ün',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0218.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/vn-3.mp3'
                                    },
                                    {
                                        text: 'ün',
                                        img1: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/1-读一读-汉语拼音-字母0219.png',
                                        audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/1.栏目1/vn-4.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'bottom',
                                content: [
                                    {
                                        text: 'dan',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/1.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0220.png'
                                    },
                                    {
                                        text: 'tan',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/2.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0221.png'
                                    },
                                    {
                                        text: 'nan',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/3.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0222.png'
                                    },
                                    {
                                        text: 'guan',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/4.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0223.png'
                                    },
                                    {
                                        text: 'kuan',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/5.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0224.png'
                                    },
                                    {
                                        text: 'huan',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/6.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0225.png'
                                    },
                                    {
                                        text: 'juan',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/7.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0226.png'
                                    },
                                    {
                                        text: 'quan',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/8.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0227.png'
                                    },
                                    {
                                        text: 'xuan',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/9.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0228.png'
                                    },
                                    {
                                        text: 'zhen',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/10.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0229.png'
                                    },
                                    {
                                        text: 'chen',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/11.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0230.png'
                                    },
                                    {
                                        text: 'shen',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/12.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0231.png'
                                    },
                                    {
                                        text: 'bin',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/13.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0232.png'
                                    },
                                    {
                                        text: 'pin',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/14.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0233.png'
                                    },
                                    {
                                        text: 'nin',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/15.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0234.png'
                                    },
                                    {
                                        text: 'gun',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/16.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0235.png'
                                    },
                                    {
                                        text: 'cun',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/17.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0236.png'
                                    },
                                    {
                                        text: 'chun',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/18.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0237.png'
                                    },
                                    {
                                        text: 'jun',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/19.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0238.png'
                                    },
                                    {
                                        text: 'qun',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/20.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0239.png'
                                    },
                                    {
                                        text: 'xun',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/MP4/21.mp4',
                                        img: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/2.栏目2/1-读一读-汉语拼音-字母0240.png'
                                    }

                                ]
                            },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/3.栏目3/12.mp4',
                                        clickItem: [
                                            {
                                                top: '44%',
                                                left: '58%',
                                                width: '12%',
                                                height: '14%',
                                                audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/3.栏目3/森林.mp3'
                                            },
                                            {
                                                top: '27%',
                                                left: '66%',
                                                width: '15%',
                                                height: '15%',
                                                audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/3.栏目3/白云.mp3'
                                            },
                                            {
                                                top: '59%',
                                                left: '56%',
                                                width: '15%',
                                                height: '15%',
                                                audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/3.栏目3/草原.mp3'
                                            },
                                            {
                                                top: '18%',
                                                left: '33%',
                                                width: '15%',
                                                height: '15%',
                                                audio: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/3.栏目3/蓝天.mp3'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'stillControlFull',
                                content: [
                                    {
                                        text: 'an en in un ün',
                                        video: 'assets/video/7.读一读/12-读一读-汉语拼音十二-an en in un vn/4.栏目4/12-读一读-汉语拼音十二-1.mp4',
                                        btnImg: 'assets/images/kantingduxie/start.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                count: '2',
                                content: [
                                    {
                                        text: 'an',
                                        img1: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/2.小字/1.an.png',
                                        img2: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/3.GIF/1-汉语拼音-写一写-an.gif',
                                        audio: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/1.音频/1.an.mp3'
                                    },
                                    {
                                        text: 'en',
                                        img1: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/2.小字/2.en.png',
                                        img2: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/3.GIF/1-汉语拼音-写一写-en.gif',
                                        audio: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/1.音频/2.en.mp3'
                                    },
                                    {
                                        text: 'in',
                                        img1: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/2.小字/3.in.png',
                                        img2: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/3.GIF/1-汉语拼音-写一写-in.gif',
                                        audio: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/1.音频/3.in.mp3'
                                    },
                                    {
                                        text: 'un',
                                        img1: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/2.小字/4.un.png',
                                        img2: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/3.GIF/1-汉语拼音-写一写-un.gif',
                                        audio: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/1.音频/4.un.mp3'
                                    },
                                    {
                                        text: 'ün',
                                        img1: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/2.小字/5.vn.png',
                                        img2: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/3.GIF/1-汉语拼音-写一写-vn.gif',
                                        audio: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/1.音频/4.vn.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'doubleLine',
                                count: 'ciyuPinyin',
                                content: [
                                    {
                                        text: 'lunchuan',
                                        img1: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/2.小字/6.lunchuan.png',
                                        img2: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/3.GIF/lunchuan.gif',
                                        audio: 'assets/video/8.写一写/12-汉语拼音-写一写an en in un vn/1.音频/6.lunchuan.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            [
                {
                    name: '13.ang eng ing ong',
                    img: 'assets/images/home/pinyin/13.ang.png',
                    lessonId: 13,
                    lesson: {
                        kanyikan: [
                            {
                                type: 'full',
                                content: [
                                    {
                                        text: 'ang eng ing ong',
                                        video: 'assets/video/5.看一看/13.汉语拼音 十三、ang eng ing ong（看一看）_batch.mp4',
                                        img: '',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        tingyiting: [
                            {
                                type: 'row',
                                audio: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/0-13-2-1开场旁白：请小朋友们跟着读一读，还可以看看视频中的嘴型哟.mp3',
                                content: [
                                    {
                                        text: 'ang',
                                        video1: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/1.口型-ang.mp4',
                                        img1: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/绵阳-ang.png',
                                        img2: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/绵阳-ang.jpg',
                                        audio: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/绵阳-ang.mp3'
                                    },
                                    {
                                        text: 'eng',
                                        video1: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/2.口型-eng.mp4',
                                        img1: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/台灯-eng.png',
                                        img2: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/台灯-eng.jpg',
                                        audio: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/台灯-eng.mp3'
                                    },
                                    {
                                        text: 'ing',
                                        video1: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/3.口型-ing.mp4',
                                        img1: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/老鹰-ing.png',
                                        img2: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/老鹰-ing.jpg',
                                        audio: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/老鹰-ing.mp3'
                                    },
                                    {
                                        text: 'ong',
                                        video1: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/4.口型-ong.mp4',
                                        img1: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/闹钟-ong.png',
                                        img2: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/闹钟-ong.jpg',
                                        audio: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/1/闹钟-ong.mp3'
                                    }
                                ]
                            },
                            //视频带黑边
                            {
                                type: 'controlFull',
                                content: [
                                    {
                                        text: 'ang eng ing ong',
                                        video: 'assets/video/6.听一听/13.汉语拼音 十三、ang eng ing ong（听一听）/2/13.汉语拼音 十三、ang eng ing ong（听一听）-2.mp4',
                                        btnImg: 'assets/images/kantingduxie/pandaStart.png',
                                        img: 'assets/images/kantingduxie/beijing.png',
                                        audio: ''
                                    }
                                ]
                            }
                        ],
                        duyidu: [
                            {
                                type: 'block',
                                audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1.开场旁白：小朋友们，请跟我读，ang eng ing ong,现在我们给这些后鼻韵母标上声调，你能读的准吗？请你自己读一读吧.mp3',
                                content: [
                                    {
                                        text: 'ang',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0241.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ang-1.mp3'
                                    },
                                    {
                                        text: 'ang',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0242.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ang-2.mp3'
                                    },
                                    {
                                        text: 'ang',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0243.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ang-3.mp3'
                                    },
                                    {
                                        text: 'ang',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0244.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ang-4.mp3'
                                    },
                                    {
                                        text: 'eng',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0245.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/eng-1.mp3'
                                    },
                                    {
                                        text: 'eng',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0246.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/eng-2.mp3'
                                    },
                                    {
                                        text: 'eng',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0247.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/eng-3.mp3'
                                    },
                                    {
                                        text: 'eng',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0248.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/eng-4.mp3'
                                    },
                                    {
                                        text: 'ing',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0249.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ing-1.mp3'
                                    },
                                    {
                                        text: 'ing',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0250.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ing-2.mp3'
                                    },
                                    {
                                        text: 'ing',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0251.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ing-3.mp3'
                                    },
                                    {
                                        text: 'ing',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0252.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ing-4.mp3'
                                    },
                                    {
                                        text: 'ong',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0253.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ong-1.mp3'
                                    },
                                    {
                                        text: 'ong',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0254.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ong-2.mp3'
                                    },
                                    {
                                        text: 'ong',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0255.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ong-3.mp3'
                                    },
                                    {
                                        text: 'ong',
                                        img1: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/1-读一读-汉语拼音-字母0256.png',
                                        audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/1.栏目1/ong-4.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'bottom',
                                content: [
                                    {
                                        text: 'zhang',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/1.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0257.png'
                                    },
                                    {
                                        text: 'shang',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/2.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0258.png'
                                    },
                                    {
                                        text: 'zhuang',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/3.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0259.png'
                                    },
                                    {
                                        text: 'shuang',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/4.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0260.png'
                                    },
                                    {
                                        text: 'beng',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/5.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0261.png'
                                    },
                                    {
                                        text: 'meng',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/6.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0262.png'
                                    },
                                    {
                                        text: 'geng',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/7.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0263.png'
                                    },
                                    {
                                        text: 'heng',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/8.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0264.png'
                                    },
                                    {
                                        text: 'jing',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/9.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0265.png'
                                    },
                                    {
                                        text: 'xing',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/10.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0266.png'
                                    },
                                    {
                                        text: 'ming',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/11.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0267.png'
                                    },
                                    {
                                        text: 'ting',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/12.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0268.png'
                                    },
                                    {
                                        text: 'cong',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/13.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0269.png'
                                    },
                                    {
                                        text: 'chong',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/14.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0270.png'
                                    },
                                    {
                                        text: 'xiong',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/15.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0271.png'
                                    },
                                    {
                                        text: 'zhuang',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/16.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0272.png'
                                    },
                                    {
                                        text: 'chuang',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/17.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0273.png'
                                    },
                                    {
                                        text: 'qiang',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/18.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0274.png'
                                    },
                                    {
                                        text: 'qiong',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/MP4/19.mp4',
                                        img: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/2.栏目2/1-读一读-汉语拼音-字母0275.png'
                                    }

                                ]
                            },
                            {
                                type: 'intrFull',
                                content: [
                                    {
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/3.栏目3/13.mp4',
                                        clickItem: [
                                            {
                                                top: '24%',
                                                left: '71%',
                                                width: '26%',
                                                height: '14%',
                                                audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/3.栏目3/打乒乓球.mp3'
                                            },
                                            {
                                                top: '24%',
                                                left: '42%',
                                                width: '28%',
                                                height: '15%',
                                                audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/3.栏目3/游泳.mp3'
                                            },
                                            {
                                                top: '59%',
                                                left: '56%',
                                                width: '15%',
                                                height: '15%',
                                                audio: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/3.栏目3/骑自行车.mp3'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'stillControlFull',
                                content: [
                                    {
                                        text: 'ang eng ing ong',
                                        video: 'assets/video/7.读一读/13-读一读-汉语拼音十三-ang eng ing ong/4.栏目4/13-读一读-汉语拼音十三-1.mp4',
                                        btnImg: 'assets/images/kantingduxie/start.png'
                                    }
                                ]
                            }
                        ],
                        xieyixie: [
                            {
                                type: 'doubleLine',
                                count: '3',
                                content: [
                                    {
                                        text: 'ang',
                                        img1: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/2.小字/1.ang.png',
                                        img2: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/3.GIF/1-汉语拼音-写一写-ang.gif',
                                        audio: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/1.音频/1.ang.mp3'
                                    },
                                    {
                                        text: 'eng',
                                        img1: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/2.小字/2.eng.png',
                                        img2: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/3.GIF/1-汉语拼音-写一写-eng.gif',
                                        audio: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/1.音频/2.eng.mp3'
                                    },
                                    {
                                        text: 'ing',
                                        img1: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/2.小字/3.ing.png',
                                        img2: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/3.GIF/1-汉语拼音-写一写-ing.gif',
                                        audio: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/1.音频/3.ing.mp3'
                                    },
                                    {
                                        text: 'ong',
                                        img1: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/2.小字/4.ong.png',
                                        img2: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/3.GIF/1-汉语拼音-写一写-ong.gif',
                                        audio: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/1.音频/4.ong.mp3'
                                    }
                                ]
                            },
                            {
                                type: 'doubleLine',
                                count: 'ciyuPinyin',
                                content: [
                                    {
                                        text: 'mingliang',
                                        img1: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/2.小字/5.mingliang.png',
                                        img2: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/3.GIF/mingliang.gif',
                                        audio: 'assets/video/8.写一写/13-汉语拼音-写一写ang eng ing ong/1.音频/5.mingliang.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        ]
    },
    {
        name: '课文1',
        learn: [
            [
                {
                    name: '1.秋天',
                    img: 'assets/images/home/kewen1/1.qiutian.png',
                    lessonId: 1,
                    lesson: {
                        xinshan: {
                            btn1: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/1.课文欣赏/2.课文/1.qiutian.mp4'
                                        }
                                    ]
                                }
                            ],
                            btn2: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/2.课文/1课文一一 秋天（课文朗读）.mp4'
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '秋天',
                                        video: 'assets/video/4.知识拓展/2.课文/1课文一一 秋天（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '2.小小的船',
                    img: 'assets/images/home/kewen1/2.xiaochuan.png',
                    lessonId: 2,
                    lesson: {
                        xinshan: {
                            btn1: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/1.课文欣赏/2.课文/2.xiaoxiaodechuan.mp4'
                                        }
                                    ]
                                }
                            ],
                            btn2: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/2.课文/2课文一二 小小的船（课文朗读）.mp4'
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '小小的船',
                                        video: 'assets/video/4.知识拓展/2.课文/2课文一二 小小的船（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '3.江南',
                    img: 'assets/images/home/kewen1/3.jiangnan.png',
                    lessonId: 3,
                    lesson: {
                        xinshan: {
                            btn1: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/1.课文欣赏/2.课文/3.jiangnan.mp4'
                                        }
                                    ]
                                }
                            ],
                            btn2: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/2.课文/3课文一三 江南（课文朗读）.mp4'
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '江南',
                                        video: 'assets/video/4.知识拓展/2.课文/3课文一三 江南（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '4.四季',
                    img: 'assets/images/home/kewen1/4.siji.png',
                    lessonId: 4,
                    lesson: {
                        xinshan: {
                            btn1: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/1.课文欣赏/2.课文/4.siji.mp4'
                                        }
                                    ]
                                }
                            ],
                            btn2: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/2.课文/4课文一四 四季（课文朗读）.mp4'
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '四季',
                                        video: 'assets/video/4.知识拓展/2.课文/4课文一四 四季（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        ]
    },
    {
        name: '识字2',
        learn: [
            [
                {
                    name: '6.画',
                    img: 'assets/images/home/shizi2/6.hua.png',
                    lessonId: 1,
                    lesson: {
                        xinshan: {
                            btn1: [
                                {
                                    type: 'full',
                                    content: [
                                        {
                                            video: 'assets/video/1.课文欣赏/1.识字/6.hua.mp4'
                                        }
                                    ]
                                }
                            ],
                            btn2: [
                                {
                                    type: 'videoAndAudio',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/1.识字/6识字二六 画（课文朗读）/6识字二六 画（课文朗读）.mp4',
                                            audioBtns: [
                                                {
                                                    top: '26%',
                                                    left: '73%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/6识字二六 画（课文朗读）/音频/1.远看山有色.mp3'
                                                },
                                                {
                                                    top: '45%',
                                                    left: '73%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/6识字二六 画（课文朗读）/音频/2.近听水无声.mp3'
                                                },
                                                {
                                                    top: '64%',
                                                    left: '73%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/6识字二六 画（课文朗读）/音频/3.春去花还在.mp3'
                                                },
                                                {
                                                    top: '83%',
                                                    left: '73%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/6识字二六 画（课文朗读）/音频/4.人来鸟不惊.mp3'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'guess',
                                audio: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/开场旁白：猜一猜.wav',
                                content: [
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/谜语一.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/日谜语.wav',
                                        anwser: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/谜底一.png',
                                        anwserAudio: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/日.wav',
                                        hide: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/谜底.png'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/谜语二.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/萤火虫谜语.wav',
                                        anwser: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/谜底二.png',
                                        anwserAudio: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/萤火虫.wav',
                                        hide: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/谜底.png'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/谜语三.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/萤火虫风.wav',
                                        anwser: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/谜底三.png',
                                        anwserAudio: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/风.wav',
                                        hide: 'assets/video/4.知识拓展/1.识字/6识字二六 画（知识拓展）/谜底.png'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '7.大小多少',
                    img: 'assets/images/home/shizi2/7.duoshao.png',
                    lessonId: 2,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/1.识字/7.daxiaoduoshao.mp4',
                            btn2: [
                                {
                                    type: 'videoAndAudio',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/7识字二七 大小多少（课文朗读）.mp4',
                                            audioBtns: [
                                                {
                                                    top: '30%',
                                                    left: '50%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/音频/1.一个大，一个小,一头黄牛，一只猫.mp3'
                                                },
                                                {
                                                    top: '30%',
                                                    left: '73%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/音频/2.一边多，一边少,一群鸭子，一只鸟.mp3'
                                                },
                                                {
                                                    top: '70%',
                                                    left: '50%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/音频/3.一个大一个小，一个苹果一颗枣.mp3'
                                                },
                                                {
                                                    top: '70%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/音频/4.一边多，一边少,一堆杏子，一个桃.mp3'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: 'videoAndAudio',
                                    content: [
                                        {
                                            img: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/1.文本一/7.识字二 七、大小多少（课文朗读）-文本一.jpg',
                                            audioBtns: [
                                                {
                                                    top: '30%',
                                                    left: '50%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/6识字二六 画（课文朗读）/音频/1.远看山有色.mp3'
                                                },
                                                {
                                                    top: '30%',
                                                    left: '73%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/6识字二六 画（课文朗读）/音频/2.近听水无声.mp3'
                                                },
                                                {
                                                    top: '70%',
                                                    left: '50%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/6识字二六 画（课文朗读）/音频/3.春去花还在.mp3'
                                                },
                                                {
                                                    top: '70%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/6识字二六 画（课文朗读）/音频/4.人来鸟不惊.mp3'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: 'videoAndAudio',
                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/1.文本一/开场旁白：小朋友，我们来一起合作读一读吧？我读黑色部分，你读红色部分，准备好了吗.mp3',
                                    conetent: [
                                        {
                                            audioEnd: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/1.文本一/旁白：太棒了，合作真愉快！.mp3',
                                            img: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/2.文本二/7.识字二 七、大小多少（课文朗读）-文本二.jpg',
                                            audioBtns: [
                                                {
                                                    top: '30%',
                                                    left: '50%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/2.文本二/1.一个大.mp3'
                                                },
                                                {
                                                    top: '30%',
                                                    left: '73%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/2.文本二/2.一边多.mp3'
                                                },
                                                {
                                                    top: '70%',
                                                    left: '50%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/2.文本二/3.一头黄牛.mp3'
                                                },
                                                {
                                                    top: '70%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/2.文本二/4.一群鸭子.mp3'
                                                },
                                                {
                                                    top: '30%',
                                                    left: '50%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/2.文本二/1.一个大.mp3'
                                                },
                                                {
                                                    top: '30%',
                                                    left: '73%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/2.文本二/2.一边多.mp3'
                                                },
                                                {
                                                    top: '70%',
                                                    left: '50%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/2.文本二/5.一个苹果.mp3'
                                                },
                                                {
                                                    top: '70%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/2.文本二/6.一堆杏子.mp3'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: 'videoAndAudio',
                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/1.文本一/开场旁白：小朋友，我们来一起合作读一读吧？我读黑色部分，你读红色部分，准备好了吗.mp3',
                                    content: [
                                        {
                                            audioEnd: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/1.文本一/旁白：太棒了，合作真愉快！.mp3',
                                            img: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/3.文本三/7.识字二 七、大小多少（课文朗读）-文本三.jpg',
                                            audioBtns: [
                                                {
                                                    top: '30%',
                                                    left: '50%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/3.文本三/1.一个大一个少，一头一只.mp3'
                                                },
                                                {
                                                    top: '30%',
                                                    left: '73%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/3.文本三/2.一边多一边少，一群一只.mp3'
                                                },
                                                {
                                                    top: '70%',
                                                    left: '50%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/3.文本三/3.一个大一个小，一个一颗.mp3'
                                                },
                                                {
                                                    top: '70%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/3.文本三/4.一边多一边少，一堆一个.mp3'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                audioStart: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/1.文本一/开场旁白：小朋友，我们来一起合作读一读吧？我读黑色部分，你读红色部分，准备好了吗.mp3',
                                audioEnd: 'assets/video/2.课文朗读/1.识字/7识字二七 大小多少（课文朗读）/1.文本一/旁白：太棒了，合作真愉快！.mp3',
                                audio: 'assets/video/4.知识拓展/1.识字/7识字二七 大小多少（知识拓展）/7-识字-大小多少（开场旁白）.mp3',
                                content: [
                                    {
                                        text: '大小多少',
                                        video: '',
                                        audio: '',
                                        img: 'assets/video/4.知识拓展/1.识字/7识字二七 大小多少（知识拓展）/大小多少.jpg'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '8.小书包',
                    img: 'assets/images/home/shizi2/8.shubao.png',
                    lessonId: 3,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/1.识字/8.xiaoshubao.mp4',
                            btn2: [
                                {
                                    type: 'videoAndAudio',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/小书包.mp4',
                                            audioBtns: [
                                                {
                                                    top: '5%',
                                                    left: '59%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/1.小书包.mp3'
                                                },
                                                {
                                                    top: '17%',
                                                    left: '30%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/2.橡皮.mp3'
                                                },
                                                {
                                                    top: '17%',
                                                    left: '53%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/3.尺子.mp3'
                                                },
                                                {
                                                    top: '17%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/4.作业本.mp3'
                                                },
                                                {
                                                    top: '31%',
                                                    left: '30%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/5.笔袋.mp3'
                                                },
                                                {
                                                    top: '31%',
                                                    left: '53%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/6.铅笔.mp3'
                                                },
                                                {
                                                    top: '31%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/7.转笔刀.mp3'
                                                },
                                                {
                                                    top: '46%',
                                                    left: '42%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/8.我的小书包.mp3'
                                                },
                                                {
                                                    top: '61%',
                                                    left: '42%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/9.宝贝真不少.mp3'
                                                },
                                                {
                                                    top: '75%',
                                                    left: '42%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/10.课本作业本.mp3'
                                                },
                                                {
                                                    top: '88%',
                                                    left: '42%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/11.铅笔转笔刀.mp3'
                                                },
                                                {
                                                    top: '46%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/12.上课静悄悄.mp3'
                                                },
                                                {
                                                    top: '61%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/13.下课不乱跑.mp3'
                                                },
                                                {
                                                    top: '75%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/14.天天起得早.mp3'
                                                },
                                                {
                                                    top: '88%',
                                                    left: '83%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/音频/15.陪我去学校.mp3'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                audio: '',
                                content: [
                                    {
                                        text: '小书包',
                                        video: 'assets/video/2.课文朗读/1.识字/8识字二八 小书包（课文朗读）/小书包.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '9.日月明',
                    img: 'assets/images/home/shizi2/9.ming.png',
                    lessonId: 4,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/1.识字/9.riyueming.mp4',
                            btn2: [
                                {
                                    type: 'videoAndAudio',
                                    audio: 'assets/video/2.课文朗读/1.识字/9识字二九 日月明（课文朗读）/音频/开场旁白：小朋友，我们来一起合作读一读吧？我读黑色部分，你读红色部分，准备好了吗.mp3',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/1.识字/9识字二九 日月明（课文朗读）/9识字二九 日月明（课文朗读）.mp4',
                                            audioBtns: [
                                                {
                                                    top: '15%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/9识字二九 日月明（课文朗读）/音频/1.日月明，田力男。.mp3'
                                                },
                                                {
                                                    top: '25%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/9识字二九 日月明（课文朗读）/音频/2.小大尖，小土尘。.mp3'
                                                },
                                                {
                                                    top: '35%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/9识字二九 日月明（课文朗读）/音频/3.二人从，三人众。.mp3'
                                                },
                                                {
                                                    top: '45%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/9识字二九 日月明（课文朗读）/音频/4.双木林，三木森。.mp3'
                                                },
                                                {
                                                    top: '55%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/9识字二九 日月明（课文朗读）/音频/5.一人不成众。.mp3'
                                                },
                                                {
                                                    top: '65%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/9识字二九 日月明（课文朗读）/音频/6.独木不成林。.mp3'
                                                },
                                                {
                                                    top: '75%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/9识字二九 日月明（课文朗读）/音频/7.众人一条心。.mp3'
                                                },
                                                {
                                                    top: '85%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/9识字二九 日月明（课文朗读）/音频/8.黄土变成金。.mp3'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'halfRow',
                                audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/11.识字二 九、日月明（知识拓展）-开场旁白.mp3',
                                content: [
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/1.朋.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/月月朋.mp3'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/2.好.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/女子好.mp3'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/3.岩.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/山石岩.mp3'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/4.泉.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/白水泉.mp3'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/5.香.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/禾日香.mp3'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/6.甜.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/舌甘甜.mp3'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/7.回.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/二口回.mp3'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/8.品.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/三口品.mp3'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/9.胡.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/古月胡.mp3'
                                    },
                                    {
                                        img: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/10吴.png',
                                        audio: 'assets/video/4.知识拓展/1.识字/9识字二九 日月明（知识拓展）/口天吴.mp3'
                                    }
                                ]
                            }
                        ]
                    }
                }

            ],
            [
                {
                    name: '10.升国旗',
                    img: 'assets/images/home/shizi2/10.guoqi.png',
                    lessonId: 5,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/1.识字/10.shengguoqi.mp4',
                            btn2: [
                                {
                                    type: 'videoAndAudio',
                                    content: [
                                        {
                                            video: 'assets/video/2.课文朗读/1.识字/10识字二十 升国旗（课文朗读）/升国旗.mp4',
                                            audioBtns: [
                                                {
                                                    top: '16%',
                                                    left: '27%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/10识字二十 升国旗（课文朗读）/音频/1.中国.mp3'
                                                },
                                                {
                                                    top: '16%',
                                                    left: '46%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/10识字二十 升国旗（课文朗读）/音频/2.国旗.mp3'
                                                },
                                                {
                                                    top: '16%',
                                                    left: '72%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/10识字二十 升国旗（课文朗读）/音频/3.五星红旗.mp3'
                                                },
                                                {
                                                    top: '27%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/10识字二十 升国旗（课文朗读）/音频/4.五星红旗，我们的国旗。.mp3'
                                                },
                                                {
                                                    top: '41%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/10识字二十 升国旗（课文朗读）/音频/5.国歌声中，徐徐升起。.mp3'
                                                },
                                                {
                                                    top: '54%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/10识字二十 升国旗（课文朗读）/音频/6.迎风飘扬，多么美丽。.mp3'
                                                },
                                                {
                                                    top: '67.5%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/10识字二十 升国旗（课文朗读）/音频/7.向着国旗，我们立正。.mp3'
                                                },
                                                {
                                                    top: '81%',
                                                    left: '68%',
                                                    audio: 'assets/video/2.课文朗读/1.识字/10识字二十 升国旗（课文朗读）/音频/8.望着国旗，我们敬礼。.mp3'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        zhishi: [
                            {
                                type: 'videoAndAudio',
                                content: [
                                    {
                                        video: 'assets/video/4.知识拓展/1.识字/10识字二十 升国旗（知识拓展）/10.识字二 十、升国旗（知识拓展）.mp4',
                                        audioBtns: [
                                            {
                                                top: '80%',
                                                left: '83%',
                                                audio: 'assets/video/4.知识拓展/1.识字/10识字二十 升国旗（知识拓展）/义勇军进行曲_MP3.mp3'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        ]
    },
    {
        name: '课文2',
        learn: [
            [
                {
                    name: '5.影子',
                    img: 'assets/images/home/kewen2/5.yingzi.png',
                    lessonId: 1,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/2.课文/5.yingzi.mp4',
                            btn2: [
                                'assets/video/2.课文朗读/2.课文/5课文二五 影子（课文朗读）.mp4'
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '影子',
                                        video: 'assets/video/4.知识拓展/2.课文/5课文二五 影子（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '6.比尾巴',
                    img: 'assets/images/home/kewen2/6.weiba.png',
                    lessonId: 2,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/2.课文/6.biweiba.mp4',
                            btn2: [
                                'assets/video/2.课文朗读/2.课文/6课文二六 比尾巴（课文朗读）.mp4'
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '比尾巴',
                                        video: 'assets/video/4.知识拓展/2.课文/6课文二六 比尾巴（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '7.青蛙写诗',
                    img: 'assets/images/home/kewen2/7.qingwa.png',
                    lessonId: 3,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/2.课文/7.qingwaxieshi.mp4',
                            btn2: [
                                'assets/video/2.课文朗读/2.课文/7课文二七 青蛙写诗（课文朗读）.mp4'
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '青蛙写诗',
                                        video: 'assets/video/4.知识拓展/2.课文/7课文二七 青蛙写诗（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '8.雨点儿',
                    img: 'assets/images/home/kewen2/8.yudian.png',
                    lessonId: 4,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/2.课文/8.yudianer.mp4',
                            btn2: [
                                'assets/video/2.课文朗读/2.课文/8-课文2-八-雨点儿.mp4'
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '雨点儿',
                                        video: 'assets/video/4.知识拓展/2.课文/8课文二八 雨点儿（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                }

            ],
            [
                {
                    name: '9.明天要远足',
                    img: 'assets/images/home/kewen2/9.yuanzu.png',
                    lessonId: 5,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/2.课文/9.mingtianyaoyuanzu.mp4',
                            btn2: [
                                'assets/video/2.课文朗读/2.课文/9课文二九 明天要远足（课文朗读）.mp4'
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '明天要远足',
                                        video: 'assets/video/4.知识拓展/2.课文/9课文二九 明天要远足（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '10.大还是小',
                    img: 'assets/images/home/kewen2/10.daxiao.png',
                    lessonId: 6,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/2.课文/10.dahaishixiao.mp4',
                            btn2: [
                                'assets/video/2.课文朗读/2.课文/10课文二十 大还是小（课文朗读）.mp4'
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '大还是小',
                                        video: 'assets/video/4.知识拓展/2.课文/10课文二十 大还是小（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '11.项链',
                    img: 'assets/images/home/kewen2/11.xianglian.png',
                    lessonId: 7,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/2.课文/11.xianglian.mp4',
                            btn2: [
                                'assets/video/2.课文朗读/2.课文/11课文二十一 项链（课文朗读）.mp4'
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '项链',
                                        video: 'assets/video/4.知识拓展/2.课文/11课文二十一 项链（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '12.雪地里的小画家',
                    img: 'assets/images/home/kewen2/12.huajia.png',
                    lessonId: 8,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/2.课文/12.xiaohuajia.mp4',
                            btn2: [
                                'assets/video/2.课文朗读/2.课文/12课文二十二 雪地里的小画家（课文朗读）.mp4'
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '雪地里的小画家',
                                        video: 'assets/video/4.知识拓展/2.课文/12课文二十二 雪地里的小画家（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            [
                {
                    name: '13.乌鸦喝水',
                    img: 'assets/images/home/kewen2/13.wuya.png',
                    lessonId: 9,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/2.课文/13.wuyaheshui.mp4',
                            btn2: [
                                'assets/video/2.课文朗读/2.课文/13课文二十三 乌鸦喝水（课文朗读）.mp4'
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '乌鸦喝水',
                                        video: 'assets/video/4.知识拓展/2.课文/13课文二十三 乌鸦喝水（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    name: '14.小蜗牛',
                    img: 'assets/images/home/kewen2/14.woniu.png',
                    lessonId: 10,
                    lesson: {
                        xinshan: {
                            btn1: 'assets/video/1.课文欣赏/2.课文/14.xiaowoniu.mp4',
                            btn2: [
                                'assets/video/2.课文朗读/2.课文/14课文二十四 小蜗牛（课文朗读）.mp4'
                            ]
                        },
                        zhishi: [
                            {
                                type: 'zhishiFull',
                                content: [
                                    {
                                        text: '小蜗牛',
                                        video: 'assets/video/4.知识拓展/2.课文/14课文二十四 小蜗牛（知识拓展）.mp4',
                                        audio: ''
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        ]
    }
]

