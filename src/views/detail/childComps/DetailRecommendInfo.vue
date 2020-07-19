<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <ul>
      <li>推荐1</li>
      <li>推荐2</li>
      <li>推荐3</li>
      <li>推荐4</li>
      <li>推荐5</li>
      <li>推荐6</li>
      <li>推荐7</li>
      <li>推荐8</li>
      <li>推荐9</li>
      <li>推荐10</li>
      <li>推荐11</li>
      <li>推荐12</li>
      <li>推荐13</li>
      <li>推荐14</li>
      <li>推荐15</li>
      <li>推荐16</li>
      <li>推荐17</li>
      <li>推荐18</li>
      <li>推荐19</li>
      <li>推荐20</li>
      <li>推荐21</li>
      <li>推荐22</li>
      <li>推荐23</li>
      <li>推荐24</li>
      <li>推荐25</li>
      <li>推荐26</li>
      <li>推荐27</li>
      <li>推荐28</li>
      <li>推荐29</li>
      <li>推荐30</li>
      <li>推荐31</li>
      <li>推荐32</li>
      <li>推荐33</li>
      <li>推荐34</li>
      <li>推荐35</li>
      <li>推荐36</li>
      <li>推荐37</li>
      <li>推荐38</li>
      <li>推荐39</li>
      <li>推荐40</li>
      <li>推荐41</li>
      <li>推荐42</li>
      <li>推荐43</li>
      <li>推荐44</li>
      <li>推荐45</li>
      <li>推荐46</li>
      <li>推荐47</li>
      <li>推荐48</li>
      <li>推荐49</li>
      <li>推荐50</li>
      <li>推荐51</li>
      <li>推荐52</li>
      <li>推荐53</li>
      <li>推荐54</li>
      <li>推荐55</li>
      <li>推荐56</li>
      <li>推荐57</li>
      <li>推荐58</li>
      <li>推荐59</li>
      <li>推荐60</li>
      <li>推荐61</li>
      <li>推荐62</li>
      <li>推荐63</li>
      <li>推荐64</li>
      <li>推荐65</li>
      <li>推荐66</li>
      <li>推荐67</li>
      <li>推荐68</li>
      <li>推荐69</li>
      <li>推荐70</li>
      <li>推荐71</li>
      <li>推荐72</li>
      <li>推荐73</li>
      <li>推荐74</li>
      <li>推荐75</li>
      <li>推荐76</li>
      <li>推荐77</li>
      <li>推荐78</li>
      <li>推荐79</li>
      <li>推荐80</li>
      <li>推荐81</li>
      <li>推荐82</li>
      <li>推荐83</li>
      <li>推荐84</li>
      <li>推荐85</li>
      <li>推荐86</li>
      <li>推荐87</li>
      <li>推荐88</li>
      <li>推荐89</li>
      <li>推荐90</li>
      <li>推荐91</li>
      <li>推荐92</li>
      <li>推荐93</li>
      <li>推荐94</li>
      <li>推荐95</li>
      <li>推荐96</li>
      <li>推荐97</li>
      <li>推荐98</li>
      <li>推荐99</li>
      <li>推荐100</li>
    </ul>
    <goods-list-item v-for="(item, index) in recommendList" :key="index" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>

  import GoodsListItem from 'components/content/goods/GoodsListItem'

	export default {
		name: "DetailRecommendInfo",
    components: {

      GoodsListItem
    },
    props: {
		  recommendList: {
		    type: Array
      }
    }
	}
</script>

<style scoped>
  .recommend-info {
    padding: 5px;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>
