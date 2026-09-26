---
title: "混沌与分形：以简驽繁的艺术"
description: "以混沌、分形和反馈模型，观察简单结构如何展开复杂世界。"
sidebar:
  label: "16 · 混沌与分形：以简驽繁的艺术"
---
# 混沌与分形：以简驽繁的艺术

> 发布日期：2026-05-01　|　来源：彼岸精舍Paravihara（古道禅心）　|　[原文链接](http://mp.weixin.qq.com/s?__biz=MzI1NTAxMzIxOA==&mid=2247485467&idx=1&sn=b494b5591cd99ff80b787a7ca493f02f&chksm=ea3d3016dd4ab900dfbad4c2fb0a86a96ca37307223ecb7abc7f4bce49a30651f5c16386598d#rd)

---

> 沙门骏如按：一眨眼的功夫，出家快两年了。最近在龙树林与一些外国和本地尊者交流原始四念处修法，准备基于交流录音整理一个"古道禅心"系列，把本号"[东辕西辙](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI1NTAxMzIxOA==&action=getalbum&album_id=2526429301181792256&scene=126#wechat_redirect)"，"[八颂经与彼岸道经](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI1NTAxMzIxOA==&action=getalbum&album_id=2577006648641208320&scene=126#wechat_redirect)"，"[如来禅](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI1NTAxMzIxOA==&action=getalbum&album_id=2288700064518897665&scene=126#wechat_redirect)"和"[祖师禅](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI1NTAxMzIxOA==&action=getalbum&album_id=2688987963489271812&scene=126#wechat_redirect)"的内容串起来，作为有缘法友修行[原始四念处法](https://mp.weixin.qq.com/s?__biz=MzI1NTAxMzIxOA==&mid=2247485357&idx=1&sn=cde76fdaac3e242f3ba0d115a533ab50&scene=21#wechat_redirect)的参考之用。
整理这篇东辕西辙旧文算是古道禅心系列的预热吧，内容来自2014年在北京时照道德学堂做的科学佛学讨论。混沌，分形与控制论都是复杂系统科学理论的一部分。当时的初衷是想通过演示简单反馈环路可能产生的异常复杂多样的混沌与分形的现象，辅助理解二阶控制论所揭示的类似于缘起法的反馈环路认知模型是如何产生我们所经历的这个五光十色缤纷多彩的身心世界的。
而对这个身心世界的来源与机制的迷惑，正是贪嗔烦恼以及生老病死等生命之苦的根源。最近十多年的修行经历显示这种迷惑不仅限于未修习佛法的普通人，甚至在多年修习佛法的老修身上依然根深蒂固。这也是很多修行人陷入"道高一尺，魔高一丈"悲剧的原因。这不禁令人感叹：去圣日遥，正法衰微。
值此纪念佛陀诞辰证道与涅盘的斯里兰卡特殊节日，卫塞节之际，仅以此文回向给近期离世的中国沙弥Yogananda，祝他往事善趣，早登离苦彼岸！

1. 混沌与生命
前面我们看到[二阶控制论的建构主义](https://mp.weixin.qq.com/s?__biz=MzI1NTAxMzIxOA==&mid=2247484596&idx=1&sn=3caeaa018cf4e6f64ee448dea5f348ca&scene=21#wechat_redirect)把生物体和世界看成是一个二维的反馈环路，画出来就像是个面包圈。当时我们问了一个问题：这么简单的一个反馈环路如何产生那么复杂的现象世界？这次我们通过混沌理论看看简单的反馈环路是如何产生复杂行为的，作为试图回答上述问题的一个准备工作。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qYOdAX0J5iaalXY0UM2QoibkX5CeDLo6IBBMo07J2gk5fdnZflib2mGCoL2PyF3L2AV2tkISTlYnZa0c9gK1Q9oEciaBLFXFO7nYZE/640?wx_fmt=jpeg)

混沌一词有很多含义，而我们今天要讨论的是西方系统科学领域近年来研究的混沌学（Chaos Theory）。所以我们需要先把脑海里面关于混沌的各种先入为主的理解放一放，等我们搞清楚混沌学中的混沌是什么意思的时候，我们再返回来反思各种混沌概念之间的关系。

混沌学和[控制论](https://mp.weixin.qq.com/s?__biz=MzI1NTAxMzIxOA==&mid=2247483666&idx=1&sn=7f2824e9bcdd9b324aa1460ce606fd25&scene=21#wechat_redirect)有很密切的关系，我们上次讨论中提到控制论把吸引子分成三类：定常吸引子，周期吸引子和奇异吸引子。而奇异吸引子的行为就是具有混沌特征的。

与其给混沌下一个抽象的定义，不如我们通过一个反馈环路的例子引导出一个直观的理解。在这个例子中我们会运用到一些简单的数学，对于数学有恐惧心理或者抵触心理的朋友务必克服一下，可以放慢阅读的速度，但是尽量有耐心把例子要表达的机理看懂。我们所用到的数学应该不超出小学数学的简单范畴。

我们这次要看的例子是生态学中一个著名的虫口模型，又称为罗杰斯特映射（Logistic Map）。这个模型可以用来描述一个种群数量随着时间的变化。以人口为例，我们知道影响人口数量的因素一方面是人的生育能力，另一方面是环境对于人口的限制。而当人口很少的时候，往往环境的限制是比较弱的，而当人口比较多的时候，环境的限制就会比较明显。基于这种理解，我们可以把上个年度和下个年度之间的人口数量关系建模成下图这样的映射关系（蓝线）。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qYlUt3Ff9bJRazzmDnwdSfN3jbwTAJxw1KZHJF0xfMMTeBymsDhqDFibGkCsiaBaWfO9GfVhvDqZA4bj7jrsImDXfDcmiat0H8wMU/640?wx_fmt=jpeg)

横坐标x(n)代表某年度的人口，纵坐标x(n+1)代表下个年度的人口。图中蓝色的曲线代表下年度人口和上年度人口之间的映射关系。从这个映射关系我们可以看到，当上个年度人口比较少的时候，下个年度人口会相对有所增加，而当上年度人口比较多的时候，下个年度人口会相对有所下降。这符合我们前面对于环境限制人口的分析。

如果用数学公式表达这种年度之间的人口变化关系，可以写成这样：
Xn+1= kXn(1-Xn)
其中的k基本上可以对应人口的出生率，即假如不考虑环境因素下，下年度和上年度的人口增长比例。在上图中k=2，表现为原点处曲线的斜率。在这个模型中k的取值范围是1到4，X的取值范围是0到1。即人口值是一个归一化之后的小数数值。

注意上面的公式中，人口的数量依赖于人口的数量。这构成了一个非常简单的反馈环路。从控制论角度看，我们这里的研究对象就是一个人群和他们生存环境组成的系统，而我们区分的状态空间比较简单，只是这个人群的（归一化）个体数量。所以系统的状态空间是一个一维的从0到1的小数数字空间。下面我们就来看看这个反馈环路可以产生哪些动态行为。

上图中的红色线代表了一种人口数量变化的可能性，即假设初始人口为S0，通过映射关系求得下个年度人口为S1，然后再次映射得到再下一个年度为S2，依次类推。这样反复的应用上面的重入映射模型，最终人口将趋向于一个稳定值S3。而且无论我们的初始人口取什么样的值，反复应用这个模型后，最终人口都会趋向于S3。用控制论的术语说，这个系统在状态S3上存在一个定常吸引子。如果我们把人口的数量随时间的变化画出来，则看起来和下图类似：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qa5VIwyme7MygcU343YAPVGuSbMc2tiaDzABxkL7hsVQS19BzNnLdmQtHYeuDQZTiaPF1PLMJXT9AKt9HTickZaHDYzKLcWpV1vMU/640?wx_fmt=jpeg)

（由于图片来源不同，这个图的k值等于2.8，不过吸引子是一样的）

下面我们假设人口的出生率有所增加，k从2变成了3.2，映射关系图变为下图，蓝色的曲线更加“陡峭”了：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qbD1D2cIxO4ULSW4CmT7VZ5CVnd2DnMXOIubiaOREicqJlULSNmpdNRGexTA1vAhxa0D4D2yjXV38RGClnQagWb4Ftq5uDgppavQ/640?wx_fmt=jpeg)

这种情况下，从任意一个初始人口状态出发，最终的人口不会再停留在一个固定值的水平上，而是会在两个数值之间震荡变化。如果我们绘制人口随时间的变化，则会看到：

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qYMkw5X2DZJYCOl1sMOR8VmA5ItgqB8vRxCZhClkpm0Ca9MiafgLHvJW4Ga2VziagNJUEXUsH3IHNHLK94QQGsszWTsx44vq530E/640?wx_fmt=jpeg)

用控制论的术语说，这个系统存在一个周期吸引子。而且这个周期吸引子由两个状态组成。

随着k值的继续增加，周期吸引子中的状态数量还可能增加，比如下图就是有四个状态组成的周期吸引子（k=3.52）。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qY3iaKwmoGMwzGI1OzSgbib9mKR7V0rLxVgIFYKGtsd26Ep9rBaJhMnUwiaFV5r3Vd7yticoia8gEcNkc8JEHqCGyRTiaiaibZRDIa5p5k/640?wx_fmt=jpeg)

如果我们继续增加k的大小，当k≥3.57的时候，系统的吸引子会进入一种混沌状态，即人口随时间的变化不再具有任何周期重复的特性，随时间的变化人口会在一定的上限和下限之间进行不重复，没有周期变化，看起来好像完全随机一样。在控制论中称这种吸引子为奇异吸引子。

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qYic0MIh2klU6ATnfMDHibdcADTNsaWe3Jxzxbl7AumcHvU2x06zqbUKCm5j9YFeEZW0bN05SVpevWvSTOr2Ufpe7HJITiafozKG8/640?wx_fmt=jpeg)

下面两个图是系统进入混沌状态后的人口变化曲线。

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qbeZqKwyIT0NWDiaaAcb7ccRR4LChq5DXOia8tib2SvxMb4Ula6BCuiapEkm3QkHWShVficOhTeJ5ickdTialHviaaLm1ERhmMegk5V9F8/640?wx_fmt=jpeg)

上图是K=3.6的情况

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qZ4RONRTvjPVxgibKbVuicfibxGeGvbvY1yGCIaTVHHbBwDWBHEsMSeEticMYKbTiaTyPHZrGZCbkFOia0Mh4LaPeLbLicibBeSKicqRQTA/640?wx_fmt=jpeg)

上图是K=3.9的情况，注意相对于K=3.6的情况，人口浮动的范围进一步增大了。

如果我们总结一下上面系统的吸引子中的状态随着k值的变化，则可以绘制出所谓的状态空间分岔图来：

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qaia5DzVAol1sGbhxKm3nHuz3ebNGWQrprjUKYZaJiagU4DWvSusf3pgVdPiaEYibE3uY9kNibCf2wIMOuFibgdNjR1kcTgZ6DB7Jlks/640?wx_fmt=jpeg)

上图中横坐标代表k的取值，纵坐标是吸引子中的最终状态。我们可以看到随着k值增加，系统的吸引子从单值的定常吸引子，突变进入二值的周期吸引子，再突变进入四值的周期吸引子，八值的周期吸引子。。。并最终在k=3.57处进入奇异吸引子的混沌状态，吸引子中的状态数量突变为无穷多。之后，随着k值的进一步变大，奇异吸引子的状态覆盖范围逐渐扩大，并最终在k=4时覆盖整个0到1的状态空间。

上面描述的整个过程的动画展现，可以参考维基百科的罗杰斯特映射的页面：
http://en.wikipedia.org/wiki/File:Logistic_map_with_parameter_from_0.02_to_4_t_from_0_to_200.gif
http://en.wikipedia.org/wiki/File:LogisticCobwebChaos.gif

用我们的人口模型的语言描述，随着出生率k的增加，多年后人口的状态会出现很多种不同的稳态情况。当k比较小的时候，人口最终会稳定在一个固定水平上（定常吸引子）。随着k的增加，人口最终会处于一种周期变化的状态（周期吸引子），不再稳定在单一的状态上。随着k值进一步增加，人口会突然进入混沌状态，即随着时间的推移，人口不再稳定在任何固定数值上，也不会呈现任何周期性，而是在一定的范围内，以一种看似随机的过程变化着（奇异吸引子）。

这里值得指出的是，上面看到的所有这些复杂的人口行为，都是由一个非常简单的反馈模型驱动的。如果我们把上面模型中的出生率kX理解为一种系统内部的增益能力，把（1-X）理解为一种抑制能力，那么我们可以说，随着增益和抑制能力的强度变化，系统会自动涌现出定常，周期，和混沌等众多种吸引子状态，从而表现出异常复杂的行为。

当系统进入混沌状态时，对于一个不了解系统背后规律的观察者来说，系统看起来就像是在做随机运动一样。这不得不让我们怀疑，目前科学所理解的随机性，到底是因为我们不了解规律而产生的错觉，还是宇宙本体的一种特征。关于随机性的争论也是20世纪初，量子物理学家和爱因斯坦的主要争论所在。爱因斯坦曾经有一句名言：“我相信上帝不掷骰子”。虽然目前的科学界基本上公认了随机性是宇宙本质的现象，但是我们刚刚看到的混沌的例子似乎在支持爱因斯坦的直觉。

混沌的例子还有一个深刻的启示，即确定性和不可预测性可以同时存在。虽然上面的例子中规律是简单确定的，但是当系统进入混沌状态后，系统的行为还是不可预测的。这对于一般人来说感觉不可理解，既然公式都知道了，那么任何一个时刻的人口数量不就完全确定了吗？其实不然，从纯实际的角度出发，我们对于系统的初值的衡量总会是有一点儿误差的，而混沌系统因为系统增益非常大，所以会不断的放大这种误差，从而使得初始的微小的区别，在多次重入后，变成天壤之别。这也就是人们常说的蝴蝶效应：某地上空一只小小的蝴蝶扇动翅膀而扰动了空气，长时间后可能导致遥远的彼地发生一场台风，以此比喻长时期大范围天气预报往往因一点点微小的因素造成难以预测的严重后果。失之毫厘谬以千里。

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qZHoV9Uo0qriajTw0ej59RhhQVEaaM9zyibvtAO8NgwF2lrFN5icYLaujaEHdBGJbmEtpWg9HUXTNvTY8SqhwvGLRX4NxUkHr7GmM/640?wx_fmt=jpeg)

这种对初值的敏感性，导致了具有确定性规律的混沌系统也是不可预测的结果。

关于确定性和随机性的争论其实具有非常深刻的哲学和现实意义。对于一个人来说，相信宇宙是确定的，和相信宇宙是随机，会导致非常不同的人生观和价值观。相信确定性的人会对宇宙产生一种敬畏感，但是同时又可能会导致听天由命的消极心理。而相信随机性的人会有更多的创造活力，但又可能会不信因果，从而陷入为所欲为的误区。

当我们从混沌的角度重新审视上面的问题时，我们会获得更深刻的一些启示，即虽然宇宙的规律可以是确定性的，即有因果可循，但是由于系统处于混沌状态，所以这种确定性的结果又是不可完全预测的。如果从二阶控制论的角度进一步反思，那么能够做预测的主体，其实也是系统的一个部分，而他做预测活动本身就已经在干扰系统的运行，从而影响了他的预测的准确度。

在混沌和二阶控制论的主客体合一的体系中，确定性（规律）和不可预测性（神秘）可以完美的共存。

自然界中大部分系统都处于混沌的奇异吸引子中。一些常见的例子如：天气系统，生态系统，免疫系统，神经系统，股票系统，城市交通，公司团队等。奇异吸引子的特点是它既有吸引子的模式的特征，又有混沌的不可预测的特征。比如我们都知道天气的变化是有春夏秋冬的，也都知道大概北京夏天的温度在什么水平上，但是让我们准确的预测7天后的温度就是非常难以做到的一个事情。再比如我们都知道张三长得什么样子，性格有哪些特点，但是我们却无法确定性的知道张三对于下个挑战的具体反应是什么。

在心电图分析领域，科学家们发现心电图都是带有混沌特征的图形，意味着心脏的运动是一种混沌吸引子。科学家们发现，当心电图中的混沌现象消失时，即奇异吸引子变成周期吸引子时，往往意味着病人很快会出现心肌梗死。（因为这意味着系统的熵值，即自由度和能量水平已发生严重的下降。）

为此有些西方科学家提出了所谓的“混沌的边缘”的说法，认为自然界，尤其是生物系统大多处于混沌的边缘，即处于奇异吸引子的状态中。在混沌的边缘上，奇异吸引子即具有一定的模式可循，同时又保持了不可预测的生命活力。太多的模式会导致机械性，太多的混沌会导致完全无序。同时从控制论的角度看，一个生物系统内部必须具有足够多的内部状态才能有足够的复杂度去应对外界的各种变化，保证这个生命体的相对稳定。而奇异吸引子相对于定常吸引子和周期吸引子来说，为生物提供了大量的内部状态（即自由度）。

综合我们前几次的讨论，我们可以看到控制论的反馈环路即可以产生具有目标特征和模式特征的吸引子，又可以产生混沌的，不可预测的生命力。这如同生命的两个方面一样，互相依存，互相转化，互相制约。请大家思考一下这种混沌系统的变化特征与佛道的修炼理论之间有什么内在的关系吗？

从刚才的例子看，使得系统从定常，进入周期，再进入混沌的原因就是k，k可以理解为系统内部能量或者能力的一种表现。比如戒定（止）可以理解为积累能量，减少耗散的方法。能量足了，身心自然进入比较混沌的状态。这种状态下自然解析能力非常好（初值敏感），很多神通都是这么来的，只是解析了一般人解析不了的信息。但是这些应该是所谓佛法的共法。不共法是在能量足之后，起观，破掉无明我执的各种吸引子，最终把思维转成智慧。不起观破我执，一味修禅定神通，很容易走火入魔。而不休止（禅定）没有足够能量，也很难突破无明爱取。

这里比较有意思的是，都是同一个系统，行为的变化仅仅是能量变了。这也相当于是一种更高层次上的自组织吧。能量增强，使得系统进入混沌态，敏感度增强。对于大脑来说，这种能量应该就是我们常说的“神”。神足了，自然比较敏感，解析能力比较强。

2. 分形的自然
这次讨论之前我们先看两张图片，一张是通过电脑特技自动生成的，而另一个是实际拍摄的照片。您能分出哪个是真，哪个是假吗？

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qZ7c0OeXicJ6XT4puibT282yceFGqSibfQgjMGDBjxWTtlWSO1icdo0aiba9w1ZH4n4CF18BwuGRb0rU5fCQAv5IiaFMsKibu4ZibjSe6Y/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qaQAmh5dXQhahK1fExUfbO1iat8QG4eFRFXcXiaG1PtsE4wVOpqrx5F4yhrlmvWQRpBojyzKzU9hFCiawHLic7C3AsHTR89sCiaPkZ8/640?wx_fmt=jpeg)

至少我第一次看到这两张图片的时候猜错了。正确答案是：第一张是照片，第二张是电脑特技。您猜对了吗？

经常看美国大片的朋友都知道如今的电脑特技已经达到了逼真的水平，但是可能很少有人知道特技背后的主要支撑技术就是我们上次讨论的混沌和这次要讨论的分形。分形是微观混沌机制不断重复后产生的一种看似随机，但是又有着不同尺度下几何自相似性的现象。这样说还是有点儿不好理解，不如我们看几个自然界中分形的例子：

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qZRia8tnVvPuIIuOcJo1wExsqJh4BdqqtZMNh8lt8nLXPkOVbjJNvyd5nmwa8qYZQwcdE1tUOuV5JiauMxGxzCzYdZylPtMWBnZY/640?wx_fmt=jpeg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qbuicqBogG4nGeHYm5TicF7u4YumH2qS0ld3vZeI5LPPI8JuJXrEIOJCe0uMUriaich0ibeU4caqLFquJ4KE3fBPGdviaM5HW7HMxHtQ/640?wx_fmt=jpeg)
![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qYuiaPxvXia96PmtUfyeiah23PWicicNDicWlLSiaKW1sDqA83kxR3FfNhq9hoyKrmgxcbQBd9ryHwd8ia8azyA2raH6icBuqROWP3PyOX8/640?wx_fmt=jpeg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qYcFHQKGSKczZ92XASWicDzDBFfYCo4CibA5A8XmEiaQyDquDLerwHjWJCC28Udv1xoz6d92VVFmxmkuuPwK9iaBYsT9SOmdQxia1OE/640?wx_fmt=jpeg)

上面的图片都具有一定程度的，不同的尺度上的“自相似”性。即你可以把图形的一个区域放大，放大后看到的现象和原来整体看到的现象很相似。如著名的曼德勃罗集分形图案，无论怎么放大，看起来都是类似的。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qZd0GtASDUlPvaPDQatPwtM9rCujAiaBqEic8tW9pASvjxBMtxxiamZiam3Wj1QJGL5c1tm0EFicibIVLMErkhyxl6QchWqHMX8aiaFX8/640?wx_fmt=jpeg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qapflJaZick0Bzic9ic3MnGGDVdCZCdbcqgC69ApVgEgiathVibJicmzKcaFcMkzOarXKIZEvNibtgHPuLicERicsLjRkd2n1XTWWYGL7hU/640?wx_fmt=jpeg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qZ0vYgKcicExibbPf3rPsBYgzxk3up4ky2gDnfKtoB1pZuBzToKfibaBDrhWACOohRLqPpic2eR4PIwRAw0uLM96k3haOM7YOFmsK8/640?wx_fmt=jpeg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qZ7IblxemIADwSI4UsJo5UVicldoIfC8Pgm55ePK9aOTprjJ5gqqdDeb409aeRDhdHt5vS7cNxyt2gIrWWDnwoicSO814KCGRq1E/640?wx_fmt=jpeg)

我们上一次讨论混沌时看到的分岔图，其实本身也是一个具有自相似特征的分形图案。

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qbAuLN4TcibQTr9fXAMQuDKkOiaus9OP9AKpjR4DjcWqdBSLvEVgjghxlKibbERuZ0F7DUibrgiajoJIdkkx86cpW2FfRx3j3mU5cuY/640?wx_fmt=jpeg)

分形图案乍看起来除了自相似之外，好像也没有什么特别的地方。但是深入研究会发现，分形图案有一些非常反常的特征。比如现代分形理论创始人曼德勃罗曾经写过一篇论文，题为“英国海岸线有多长？”。他在这篇论文给出的结论是英国海岸线的长度是无限长的。这从经典几何学的角度来看，显然是在胡说八道的，与我们的日常的直觉理解也是背道而驰的。我们这里就看一看这个无限长是怎么得来的。

曼德勃罗在论文中指出，很多自然现象，比如英国的海岸线都满足分形的特征，即无论你怎么放大，它都表现出相似曲线的特征。所以随着衡量尺度的不但细化，海岸线的长度会不断的增加。如果我们用无限细致的尺度去衡量英国的海岸线，那么它的长度就是无限长的。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qZl2ExgxtNABv5A3c1HGcG9jjYJuFlAvyVdSD5nUaaNBf5Jyk4duXY7BibSbqmGtsf34DhhfnyMRdCXfWzHW0hWLh0aU9WdicaVo/640?wx_fmt=jpeg)

当然无限细致的尺度是否有极限，我们不得而知，也许到了量子物理的层面，无法超越普朗克尺度的限制。但是当我们用非常小的尺度去衡量英国海岸线的时候，至少我们得出的长度要比一般认为的海岸线长度多非常多倍。

我们再看一个理想科克曲线的例子。百度百科上给科克曲线的定义是这样的：“设想一个边长为1的等边三角形，取每边中间的三分之一，接上去一个形状完全相似的但边长为其三分之一的三角形，结果是一个六角形。现在取六角形的每个边做同样的变换，即在中间三分之一接上更小的三角形，以此重复，直至无穷。外界的变得原来越细微曲折，形状接近理想化的雪花。”

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qYqA1wgcD215VBk5icsyb3n863ykUBke2T2KsmwFDwORTUXKwfyeXrcenMicUr812M0tfuZ7QkGxNGVJmFmT4sejswXt81QPyd4Q/640?wx_fmt=jpeg)

虽然科克曲线是一条和自己永远不相交的一维封闭曲线，但是由于它的分形结构，它的长度却是无限长的。这种有限纳无限的现象，对于我们学习经典几何长大的人来说，的确是有点儿震撼的效果。这让我们开始怀疑，我们所谓的有限，到底是真的有限，还是我们的感官和思维创造的一种假象。

因为分形几何的这种超出普通几何形状的数学特点，科学家们定义了一个分形维数的概念。比如上面的科克曲线的分形维数是1.26。从维数的角度看，分形曲线并不是一个一维曲线，这也是为什么它在有限一维空间内可以无限长的原因。作为一个可以是小数的维度衡量，分形几何突破了传统意义上的点线面体的概念，比如一个分形维度是1.9的曲线会非常像一个面，而一个分形维数是2.9的面，看起来会非常像是一个三维立体的东西。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qZl5ibWRicVuX0svYlLn5ENppicU3BJ3EuUibp48y0zjoQdAGTOcsJqFFBK861xHVdia7kKlzkkXxmhFX2Df5RHxcB98OUjxSM0uzjA/640?wx_fmt=jpeg)

（分形维数等于1.67的一条曲线）

那么自然界中为什么存在那么多分形结构呢？它们是怎么产生的呢？研究发现分形结构往往是微观混沌机制的大量重复迭代后的结果。比如我们上次讨论看到的虫口模型反复重入后就可以涌现分岔图这样的分形结果。在分形算法发明之前，想用电脑制作出云彩，溪流，海洋，山脉，树木等自然景观的仿真图形，是非常困难的事情。但是现在计算机可以非常轻松的制造逼真的自然景观，这都要归功于混沌和分形算法的普及。比如下面这个图形就是通过简单的递归（重入）算法自动实现的。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qbSgZiaxVglm2IKpXcXlvUoxOvVPfHYIqic12Q2bHcDESDgic4v8xo8MVic5BDqAIYDdynTibiaD08VtMqqjVXOcCBxHG2iaOvntdqouY/640?wx_fmt=jpeg)

下面我们再看一下彩色的曼德勃罗集的例子。这个图案是通过反复应用下面这个公式，然后把状态分岔图形化后得到的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qbWLq8OR9FjxXfo3n4wyibL7pzOyFoQfIro4TBobicMythQ5OgBjckkKtBxsEXRChqLY4oZE6o4uyp4icctuErLNia2Gx3icicE0UHzg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qZHN3ykPp7sfiapoJ5lJuravqNpFVMV9FMSarAZRnNL5cUGiaW0nV7byLMBWyPxGz72cuQLQZqiar8GbMo4bZQsUsZ6KkiaCmWA32k/640?wx_fmt=jpeg)

放大“脑袋”和“身体”中间的“脖子”的地方，会看到下图所谓的“海马山谷”。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qZqf2VUKMPSPsA9uZXO9O7s17OOVTaTMDdTU5ZPzW6MS3icIqnGQpxQzuAg483Q0ibUbMiau9v05j5mpYMpQDNG6lhYN1lmjEcXlA/640?wx_fmt=jpeg)

再放大，可以看到左侧的“双螺旋”和右侧的“海马”：

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qY8WJncRuz9TaYTPYn6vhlLb8iccdN7bPciaSqjzcafAads48hYXQK2xRmnCYqmy2FcoJtnDeWxnCWAFn5cmF0ePibRkMUqaCibJnk/640?wx_fmt=jpeg)

再放大其中一个海马：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qbOBfyUUatwtPX1s0GJdhkFtgtOiaxgAsFXSzBCMrdtQGIiaaCmtlnn8ZC6TgUbicuywJHbiaFHmGHE8s9s6wTtoJSJsGXFcibQdeto/640?wx_fmt=jpeg)

再放大到“海马的尾巴”：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qYYdWUlK9rFsrsvh6POUgp88WeuVXibicP5MlOjklrCSou6MhhCiaiaF1lR2ibmcH6YZznHSDsibg3C58WiceoicvWXAtM4zOpeOgF2Zro/640?wx_fmt=jpeg)

再继续放大四次：

![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qbA7LichibF50N5VXWgjxgSdicgBE3lgtVicK3aq1PtMesnpWoEkR0KFtZqiaFibZickE0Wug2EswoESrD9wyGjBWibkNCgltPiawqQIgkE/640?wx_fmt=jpeg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qbZ3fNJfvZjpib59fHTnMTicibetmbyX1HL1YzSH6REUI1jzQ4rAh26tthmMg72WuDvvQwkUwsxstqUouKAw4uZkN0vS2QzNobBibU/640?wx_fmt=jpeg)
![](https://mmbiz.qpic.cn/mmbiz_jpg/vltMIhYt5qYic7NBcNGFgicWtx5Fo3vsUCL88DGoCicJmjkNrXGRGCBwSsEZEpeUK0xwiaicHWjnD6QaH83YgnbtYU3K0rBdpqSklfTfXUfibKJ3E/640?wx_fmt=jpeg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qZUwKarA8I97ghy0qem9tBu1Al8kerobxc6ibfkRNWmHJNgw8KbuQqJ9jqiaTHTjNl7xpeHre0Mub2at4ENdKPSicsd1z9YztIMzY/640?wx_fmt=jpeg)

最后这张图和第一张图之间的放大比例是1亿倍。我们在这张图上又看到了第一张图上的图形，再放大下去又会看到刚才看到的所有现象。

在欣赏过美国大片和奇妙的曼德勃罗集的分形图案之后，我们也许应该反思一下：混沌和分形算法背后的反馈环路机制是否真的是自然界包括我们自身的一种根本机制？

二阶控制论的面包圈反馈模型，在讨论了混沌和分形后，虽然还有诸多问题没有解决，但是看起来好像更靠谱一点儿了。至少我们现在知道简单的反馈机制不断的重复，就可以产生千变万化的复杂现象。这些复杂现象看似随机，不可预测，但是背后却可以有简单的规律可循。而且这些由简单重入产生的复杂现象有着多尺度上的自相似性，就如同我们在自然界中看到的一样。

（沙门骏如按：因为是12年前的旧文，所以当时二阶控制论和缘起法之间的链接尚未建立，感兴趣两者关系的贤友可以参考东辕西辙系列文章：[控制论，缘起法与禅宗](https://mp.weixin.qq.com/s?__biz=MzI1NTAxMzIxOA==&mid=2247484649&idx=1&sn=c31142b4baaef82d344b85f5cba0f9fd&scene=21#wechat_redirect)。）

下面这张图案是什么？大脑的神经元网络？还是宇宙中包括暗物质和暗能量后的一个星系分布图？还是真空的量子泡沫（时空泡沫）？

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vltMIhYt5qYnHU76cDQv4UCe8zQ2DrgjgrHbQ35xhTToiaTpKuBE6TwDWRyPKd5ibQpHECXFrblZg6p6WzPly23bE2mZnTOyQeweLwGb9oxME/640?wx_fmt=jpeg)

答案是都可以是，因为三者看起来都是非常相似的样子。这种从微观极小尺度的“真空”，到人脑神经网络，再到宇宙星系尺度的自相似性，令人惊叹！从前面神经网络的讨论中我们知道，我们的感官和思维的许多功能都是简单的微观机制导致的宏观网络上的涌现现象。结合宇宙的自相似性，我们不得不怀疑大部分人对于宇宙人生的直觉到底有多（不）靠谱？我们真的是独立于环境的个体生命，与其他的个体生命一起生活在一个由物质组成的浩瀚宇宙中吗？ 还是如同佛陀所说：这个身心世界缘起于对六个感官体验的无明爱取中？
