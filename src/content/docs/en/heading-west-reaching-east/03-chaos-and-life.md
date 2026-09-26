---
title: Chaos and Life
description: Chaos and Life, from the complete English manuscript of Heading West Reaching East.
sidebar:
  label: Chaos and Life
---

![Illustration from the original manuscript](/images/heading-west-reaching-east/image17.png)

Earlier, we saw how second-order cybernetics’ constructivism views the organism and the world as a two-dimensional feedback loop, depicted as a donut. At that time, we asked: how can such a simple feedback loop generate such a complex phenomenal world? This time, through chaos theory, we will explore how simple feedback loops produce complex patterns.

The term “chaos” has many meanings, but what we will discuss today is chaos theory as studied in recent years within Western systems science. So we must temporarily set aside any preconceived notions of chaos, and only after understanding what chaos means in chaos theory can we reflect on the relationships among these various concepts.

Chaos theory is closely related to cybernetics. In our previous discussion, we mentioned that cybernetics classifies attractors into three types: steady-state attractors, periodic attractors, and strange attractors. Strange attractors exhibit chaotic behavior.

Rather than giving an abstract definition of chaos, let’s use an example of a feedback loop to develop an intuitive understanding. In this example, we will use some simple mathematics. Those who fear or resist mathematics are encouraged to overcome this, read slowly, and patiently grasp the underlying mechanism. The math involved should not exceed elementary school level.

The example we will look at is a well-known ecological model: the population model, also called the logistic map. This model describes how a population changes over time. Taking human population as an example, we know that population size is influenced by both reproductive capacity and environmental constraints. When the population is small, environmental constraints are weak; when it is large, constraints become significant. Based on this understanding, we can model the relationship between the population in one year and the next with the mapping shown below (the blue curve).

![Illustration from the original manuscript](/images/heading-west-reaching-east/image18.gif)

The horizontal axis x(n) represents the population in a given year, and the vertical axis x(n+1) represents the population in the following year. The blue curve shows the relationship between the population in consecutive years. From this mapping, we see that when the population in a given year is low, it tends to increase the next year, and when it is high, it tends to decrease. This aligns with our earlier analysis of environmental constraints on population.

The mathematical formula for this interannual relationship can be written as:

Xn+1 = kXn(1-Xn)

Here, k essentially corresponds to the birth rate, i.e., the growth rate from one year to the next in the absence of environmental constraints. In the graph above, k = 2, which appears as the slope of the curve at the origin. In this model, k ranges from 1 to 4, and X ranges from 0 to 1. That is, the population value is a normalized decimal.

Note that in the formula above, the population depends on itself, forming a very simple feedback loop (a reentrant model). From a cybernetics perspective, the object of study here is the system composed of a population and its environment, and the state space we distinguish is simply the number of individuals in the population. Thus, the system’s state space is a one-dimensional space of decimals from 0 to 1. Let’s explore the dynamic behaviors this feedback loop can generate.

The red line in the figure above represents one possible trajectory of population change. Starting with an initial population S0, we apply the mapping to get S1, then S2, and so on. By repeatedly applying this reentrant mapping, the population eventually approaches a stable value S3. Regardless of the initial population, repeated application of the model leads to S3. In cybernetic terms, the system has a steady-state attractor at S3. If we plot population over time, it looks like the following:

![Illustration from the original manuscript](/images/heading-west-reaching-east/image19.png)

(Note this figure has k = 2.8 instead of 2, but the attractor type is the same as k=2.)

Now suppose the birth rate increases, from k = 2 to k = 3.2. The mapping curve becomes steeper:

![Illustration from the original manuscript](/images/heading-west-reaching-east/image20.gif)

In this case, starting from any initial population, the population no longer settles into a single value but oscillates between two values. Plotting population over time gives:

![Illustration from the original manuscript](/images/heading-west-reaching-east/image21.png)

In cybernetic terms, the system exhibits a periodic attractor, consisting of two states.

As k continues to increase, the number of states in the periodic attractor may also increase. For instance, the figure below shows a periodic attractor with four states (k = 3.52).

![Illustration from the original manuscript](/images/heading-west-reaching-east/image22.png)

If we increase k further, when k \geq 3.57, the system’s attractor enters a chaotic state. The population no longer exhibits any periodic repetition over time but fluctuates within certain bounds in a non-repeating, aperiodic manner that appears entirely random. In cybernetics, such an attractor is called a strange attractor.

![Illustration from the original manuscript](/images/heading-west-reaching-east/image23.gif)

The two figures below show population curves when the system is in a chaotic state.

![Illustration from the original manuscript](/images/heading-west-reaching-east/image24.jpeg)

The figure above corresponds to k = 3.6.

![Illustration from the original manuscript](/images/heading-west-reaching-east/image25.jpeg)

The figure above corresponds to k = 3.9. Note that compared to k = 3.6, the range of population fluctuations has increased.

If we summarize how the states within the attractor change with k, we can plot the so-called bifurcation diagram of this state space:

![Illustration from the original manuscript](/images/heading-west-reaching-east/image26.png)

The horizontal axis represents k, and the vertical axis shows the eventual states within the attractor. As k increases, the attractor transitions from a single-valued steady-state attractor to a two-valued periodic attractor, then to a four-valued, eight-valued periodic attractor, and so on, until at k = 3.57, it enters a chaotic state with a strange attractor containing infinitely many states. Beyond this, as k increases further, the range of states covered by the strange attractor expands, eventually covering the entire state space from 0 to 1 at k = 4.

For animated visualizations of this process, refer to the Wikipedia pages on the logistic map:

http://en.wikipedia.org/wiki/File:Logistic_map_with_parameter_from_0.02_to_4_t_from_0_to_200.gif

http://en.wikipedia.org/wiki/File:LogisticCobwebChaos.gif

In terms of our population model, as the birth rate k increases, the population exhibits various steady-state behaviors after many years. When k is small, the population stabilizes at a fixed level (steady-state attractor). As k increases, the population eventually oscillates periodically (periodic attractor), no longer stabilizing at a single value. With further increases, the population suddenly enters a chaotic state—over time, it does not stabilize at any fixed value nor exhibit any periodicity but fluctuates within a range in a seemingly random manner (strange attractor).

It is worth noting that all these complex population behaviors are driven by an extremely simple feedback model. If we interpret kX as a system’s internal gain and (1-X) as inhibition, then as the balance between gain and inhibition changes, the system spontaneously exhibits a variety of attractor states—steady-state, periodic, chaotic, and so on—resulting in extraordinarily complex behavior.

When a system enters a chaotic state, to an observer unaware of the underlying rules, the system appears to move randomly. This invites us to question whether the randomness recognized by modern science is merely an illusion stemming from our ignorance of underlying laws, or an intrinsic feature of the cosmos. The debate over randomness was a central point of contention between quantum physicists and Einstein in the early 20th century. Einstein famously said, “I believe that God does not play dice.” Although the scientific community largely accepts randomness as a fundamental aspect of the universe, the chaos example we just saw seems to support Einstein’s intuition.

The chaos example also offers a profound insight: determinism and unpredictability can coexist. Although the rules in the example are simple and deterministic, once the system enters a chaotic state, its behavior becomes unpredictable. This may seem paradoxical—if we know the formula, shouldn’t the population at any time be fully determined? In practice, however, there is always some error in measuring the system’s initial state, and chaotic systems, due to their high gain, amplify these errors. Tiny initial differences, after repeated reentry, can lead to vastly different outcomes. This is the famous butterfly effect: a small butterfly flapping its wings in one part of the world can, over time, contribute to the formation of a typhoon elsewhere. It illustrates how long-term weather forecasting is highly sensitive to minute initial conditions. A small error leads to a large deviation.

![Illustration from the original manuscript](/images/heading-west-reaching-east/image27.png)

This sensitivity to initial conditions makes deterministic chaotic systems unpredictable.

The debate between determinism and randomness has profound philosophical and practical implications. Believing the universe is deterministic fosters a sense of awe but may lead to fatalism. Believing in randomness encourages creativity but may undermine faith in causality and lead to reckless behavior.

Reexamining these issues through chaos theory offers deeper insight: even if the universe’s laws are deterministic (i.e., governed by causality), chaotic systems make the outcomes fundamentally unpredictable. From the perspective of second-order cybernetics, the predictor is itself part of the system, and the act of prediction interferes with the system’s evolution, affecting accuracy.

In the framework of chaos theory and second-order cybernetics, where subject and object are unified, determinism (lawfulness) and unpredictability (mystery) can coexist perfectly.

Most natural systems exist within strange attractors exhibiting chaos. Common examples include weather systems, ecosystems, immune systems, neural systems, stock markets, urban traffic, and corporate teams. Strange attractors have both the patterned nature of attractors and the unpredictability of chaos. For instance, we know the general pattern of seasonal change and the typical summer temperatures in Beijing, yet accurately predicting the temperature seven days out is extremely difficult. Similarly, we may know someone’s appearance and personality traits, but we cannot deterministically predict their specific response to a novel challenge.

In electrocardiography, scientists have found that ECGs exhibit chaotic patterns, indicating that the heart’s rhythm is governed by a chaotic attractor. When the chaotic dynamics disappear and the strange attractor becomes a periodic attractor, it often signals an impending heart attack.

Some Western scientists have proposed the concept of the “edge of chaos,” suggesting that natural systems, especially biological ones, often operate at the edge of chaos—i.e., within a strange attractor. At the edge of chaos, a system has both structure and flexibility, pattern and unpredictability. Too much order leads to rigidity; too much chaos leads to disorder. From a cybernetic perspective, a biological system must have sufficient internal states to handle external variability and maintain stability. Compared to steady-state and periodic attractors, strange attractors provide a much richer set of internal states.

Reflecting on our previous discussions, we see that the feedback loops of cybernetics can generate both goal-oriented, patterned attractors and chaotic, unpredictable vitality. These two aspects of life are interdependent, mutually transforming, and mutually constraining. Please comtemplate whether there is a relationship between these chaotic dynamics and the practices of Buddhism and Daoism.

From the logistic map example, the transition from steady-state to periodic to chaotic behavior is driven by changes in k, which can be understood as an expression of internal energy or capacity. For instance, śīla and samādhi (ethical conduct and meditative concentration) can be seen as ways to accumulate energy and reduce dissipation. When energy is sufficient, the body and mind naturally enter a more chaotic state. In this state, sensitivity and discriminatory capacity are enhanced (sensitive dependence on initial conditions), which is how many “supernormal powers” (siddhis) arise—merely accessing information that others cannot. However, these are considered mundane accomplishments in Buddhism. The unique, supramundane aspect (asādhāraṇa) lies in, once energy is sufficient, cultivating insight (vipaśyanā) to break through the various attractors of the ego, ultimately transforming conceptual thinking into wisdom. Without insight to dismantle ego-clinging, pursuing only meditative powers leads to becoming a non-Buddhist or even falling into demonic states. Without sufficient energy (samādhi), one cannot break through ego-clinging and attachment to views.

Interestingly, the same system, with the same rules, changes its behavior simply through a change in energy—a kind of higher-level self-organization. As energy increases, the system enters a chaotic state, becoming more sensitive. For the brain, this energy is what the Taoist called “spirit” (shen). When shen is abundant, sensitivity and discernment naturally increase.
