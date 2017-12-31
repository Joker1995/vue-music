<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange">
      </search-box>
      <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
        <scroll :refreshDelay="refreshDelay" ref="shortcut" class="shortcut" :data="shortcut">
          <div>
            <div class="hot-key">
              <h1 class="title">热门搜索</h1>
              <ul>
                <li @click="addQuery(item.k)" class="item" v-for="item in hotKey">
                  <span>{{item.k}}</span>
                </li>
              </ul>
            </div>
            <div class="search-history" v-show="searchHistory.length">
              <h1 class="title">
                <span class="text">搜索历史</span>
                <span @click="showConfirm" class="clear">
                  <i class="icon-clear"></i>
                </span>
              </h1>
              <search-list @delete="deleteSearchHistory" @select="addQuery" :searches="searchHistory">
              </search-list>
            </div>
          </div>
        </scroll>
      </div>
      <div class="search-result" v-show="query" ref="searchResult">
        <suggest @listScroll="blurInput" @select="saveSearch" ref="suggest" :query="query"></suggest>
      </div>
      <confirm ref="confirm" @confirm="clearSearchHistory" text="是否清空所有搜索历史"
            confirmBtnText="清空"></confirm>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import SearchBox from 'base/search-box/search-box'
  import SearchList from 'base/search-list/search-list'
  import Scroll from 'base/scroll/scroll'
  import Confirm from 'base/confirm/confirm'
  import Suggest from 'components/suggest/suggest'
  import {getHotKey} from 'api/search'
  import {ERR_OK} from 'api/config'
  import {playlistMixin,searchMixin} from 'common/js/mixin'
  import {mapActions} from 'vuex'

  export default{
    mixins:[playlistMixin,searchMixin],
    data:{
      return{
        hotKey:[]
      }
    },
    computed:{
      shortcut(){
        this._getHotKey()
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
