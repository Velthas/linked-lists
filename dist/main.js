(()=>{const t={append(t){const e=l=>{if(null===l.next){const e=n();e.value=t,l.next=e}else e(l.next)};e(this)},prepend(t){const e=this,l=n();l.value=e.value,l.next=e.next,e.value=t,e.next=l},size(){return function t(n){return null===n.next?1:1+t(n.next)}(this)},head(){return this},tail(){if(null===this.next)return this;let t=this;for(;null!==t.next;)t=t.next;return t},at(t){return function t(n,e){return 0===n?e:n>0&&null===e.next?"Sorry pal":t(n-1,e.next)}(t,this)},pop(){const t=this.size();let n=1,e=this;for(;n<t-1;)e=e.next,n++;e.next=null},contains(t){return function n(e){return e.value===t||null!==e.next&&n(e.next)}(this)},find(t){return function n(e){return e.value===t?0:null===e.next?null:1+n(e.next)}(this)},toString(){let t=`( ${this.value} )`;return function n(e){return null===e.next?(t=`${t} -> ( ${e.value} ) -> Null`,t):(t=`${t} -> ( ${e.value} )`,n(e.next))}(this.next)},insertAt(t,e){0===e&&this.prepend(t);let l=this,u=null;const r=n();r.value=t;for(let t=1;t<=e;t++)u=l,l=l.next;return u.next=r,r.next=l,this},removeAt(t){let n=this,e=null,l=this.next;for(let u=1;u<=t;u++)e=n,n=n.next,l=n.next;return e.next=l,this}};function n(){const t=Object.create({});return t.value=null,t.next=null,t}const e=function(n){const e=Object.create(t);return e.value=1,e.next=null,e}();e.append(2),e.append(3),e.append(4),e.append(5)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWJ4QixJQUNULEdBZUYsU0FBU0QsSUFFUCxNQUFNSCxFQUFPNkIsT0FBT0MsT0FBTyxDQUFDLEdBTTVCLE9BSEE5QixFQUFLRixNQUFRLEtBQ2JFLEVBQUtDLEtBQU8sS0FFTEQsQ0FDVCxDQUVBLE1BQU0rQixFQXRCTixTQUFvQkMsR0FFbEIsTUFBTUMsRUFBV0osT0FBT0MsT0FBT2xDLEdBSy9CLE9BSEFxQyxFQUFTbkMsTUFrQmEsRUFqQnRCbUMsRUFBU2hDLEtBQU8sS0FFVGdDLENBQ1QsQ0FjYUMsR0FDYkgsRUFBS2xDLE9BQU8sR0FDWmtDLEVBQUtsQyxPQUFPLEdBQ1prQyxFQUFLbEMsT0FBTyxHQUNaa0MsRUFBS2xDLE9BQU8sRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtlZC1saXN0Ly4vc3JjL2xpbmtlZC1saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1ldGhvZHMgZm9yIGluaGVyaXRhbmNlXG5jb25zdCBsaW5rZWRMaXN0TWV0aG9kcyA9IHtcbiAgYXBwZW5kKHZhbHVlKSB7XG4gICAgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgaGVhZFxuICAgIGNvbnN0IGhlYWQgPSB0aGlzO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gcmVjdXJzaXZlbHkgdHJhdmVyc2UgbGlzdFxuICAgIGNvbnN0IHRyYXZlcnNlQW5kQXBwZW5kID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLm5leHQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gSWYgdHJ1ZSB3ZSByZWFjaGVkIGVuZCBvZiBsaXN0XG4gICAgICAgIC8vIFVzZSBmYWN0b3J5IHRvIGNyZWF0ZSB0aGUgbm9kZVxuICAgICAgICAvLyBhbmQgYXR0YWNoIGl0IGl0cyB2YWx1ZVxuICAgICAgICBjb25zdCBuZXdOb2RlID0gQ3JlYXRlTm9kZSgpO1xuICAgICAgICBuZXdOb2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIG5vZGUubmV4dCA9IG5ld05vZGU7IC8vIE5ldyBub2RlIGFscmVhZHkgcG9pbnRzIHRvIG51bGxcbiAgICAgIH0gZWxzZSB0cmF2ZXJzZUFuZEFwcGVuZChub2RlLm5leHQpOyAvLyBSZWN1cnNpdmVseSB0cmF2ZXJzZSB1bnRpbCBudWxsIGlzIGZvdW5kXG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IHRyYXZlcnNpbmcgZnJvbSB0aGUgaGVhZCAoZHVoKVxuICAgIHRyYXZlcnNlQW5kQXBwZW5kKGhlYWQpO1xuICB9LFxuICBwcmVwZW5kKHZhbHVlKSB7XG4gICAgY29uc3QgaGVhZCA9IHRoaXM7IC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gaGVhZCBmb3IgY2xhcml0eVxuICAgIGNvbnN0IG5ld05vZGUgPSBDcmVhdGVOb2RlKCk7IC8vIENyZWF0ZSBhIG5ldyBub2RlXG5cbiAgICBuZXdOb2RlLnZhbHVlID0gaGVhZC52YWx1ZTsgLy8gTWFrZSB0aGUgbmV3IG5vZGUgYmUgYSBjb3B5IG9mIGhlYWRcbiAgICBuZXdOb2RlLm5leHQgPSBoZWFkLm5leHQ7IC8vIHdoaWNoIHdpbGwgbm93IGJlIHRoZSBzZWNvbmQgbm9kZSBpbiB0aGUgbGlzdFxuXG4gICAgaGVhZC52YWx1ZSA9IHZhbHVlOyAvLyBDaGFuZ2UgdGhlIGhlYWQgdmFsdWUgYW5kIG5leHQgcHJvcHMuXG4gICAgaGVhZC5uZXh0ID0gbmV3Tm9kZTsgLy8gdGhpcyB3YXkgbGluTGlzdCBtZXRob2RzIGFyZSByZXRhaW5lZFxuICB9LFxuICBzaXplKCkge1xuICAgIGNvbnN0IHNpemUgPSAoZnVuY3Rpb24gdHJhdmVyc2VBbmRDb3VudChub2RlKSB7XG4gICAgICAvLyBSZWN1cnNpdmVseSB0cmF2ZXJzZSBsaW5rZWQgbGlzdFxuICAgICAgaWYgKG5vZGUubmV4dCA9PT0gbnVsbCkgcmV0dXJuIDE7IC8vIEJhc2UgY2FzZSB3aWxsIGJlIHJlYWNoZWQgYXQgZW5kIG9mIGxpc3RcbiAgICAgIHJldHVybiAxICsgdHJhdmVyc2VBbmRDb3VudChub2RlLm5leHQpOyAvLyBhZnRlciB3aGljaCB3ZSBqdXN0IGFkZCBvbmUgZm9yIGVhY2ggbm9kZSB0cmF2ZXJzZWRcbiAgICB9KHRoaXMpKTtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfSxcbiAgaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgdGFpbCgpIHtcbiAgICBpZiAodGhpcy5uZXh0ID09PSBudWxsKSByZXR1cm4gdGhpczsgLy8gSGVhZCBpcyB0YWlsIGlmIHRoZXJlIGlzIG9ubHkgb25lIG5vZGVcbiAgICBsZXQgbGlzdE5vZGUgPSB0aGlzOyAvLyBHZXQgYSByZWZlcmVuY2UgdG8gaGVhZCBmb3IgY2xhcml0eVxuICAgIHdoaWxlIChsaXN0Tm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAvLyBTcHJpbmtsZSBpbiBzb21lIGl0ZXJhdGlvbiBmb3IgZ29vZCBtZWFzdXJlXG4gICAgICBsaXN0Tm9kZSA9IGxpc3ROb2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBsaXN0Tm9kZTsgLy8gT25jZSB0aGUgbG9vcCBleGl0cywgdGhlIHJlbWFpbmluZyBub2RlIHdpbGwgYmUgdGhlIHRhaWxcbiAgfSxcbiAgYXQoaW5kZXgpIHtcbiAgICAvLyBSZWN1cnNpdmVseSB0cmF2ZXJzZSB0aGUgbGlzdCB1bnRpbCBpbmRleCBpcyByZWFjaGVkXG4gICAgZnVuY3Rpb24gcmV0dXJuQXQoaW5kZXhzLCBub2RlKSB7XG4gICAgICBpZiAoaW5kZXhzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBub2RlOyAvLyBXaGVuIGluZGV4ID0gMCB3ZSBoYXZlIHRoZSByaWdodCBub2RlLCB3aGljaCB3ZSByZXR1cm4gcGVyIHNwZWNpZmljYXRpb25cbiAgICAgIH0gaWYgKGluZGV4cyA+IDAgJiYgbm9kZS5uZXh0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnU29ycnkgcGFsJzsgLy8gQ2hlZWt5LCBqdXN0IGluIGNhc2Ugc29tZW9uZSB0cmllcyB0byBsb29rIGZhcnRoZXIgdGhhbiB0aGV5IGNhblxuICAgICAgfSByZXR1cm4gcmV0dXJuQXQoaW5kZXhzIC0gMSwgbm9kZS5uZXh0KTsgLy8gUmVjdXJzaXZlIHN0ZXBcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkF0KGluZGV4LCB0aGlzKTsgLy8gSW5pdGlhdGUgcmVjdXJzaW9uXG4gIH0sXG4gIHBvcCgpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy5zaXplKCk7IC8vIFdlIGNhbiB1c2Ugb3VyIG1ldGhvZCB0byBnZXQgdGhlIHNpemVcbiAgICBsZXQgaSA9IDE7IC8vIG5vdCBzdHJpY3RseSBuZWNlc3NhcnkgYnV0IGlmIGl0IHdvcmtzIGRvbid0IGJyZWFrIGl0LCBubz9cbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzO1xuICAgIHdoaWxlIChpIDwgc2l6ZSAtIDEpIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDsgLy8gV2l0aCB0aGlzIGl0ZXJhdGl2ZSBhcHByb2FjaFxuICAgICAgaSsrOyAvLyB3ZSBzdG9wIGF0IHRoZSBwZW51bHRpbWF0ZSBub2RlLCB0aGVuIGN1dCBvZmYgcmVmZXJlbmNlIHRvIHRoZSBuZXh0XG4gICAgfVxuICAgIGN1cnJlbnROb2RlLm5leHQgPSBudWxsOyAvLyBTdHJheSBvYmplY3Qgd2lsbCBiZSBnYXJiYWdlIGNvbGxlY3RlZFxuICB9LFxuICBjb250YWlucyh2YWx1ZSkge1xuICAgIGZ1bmN0aW9uIGZpbmRWYWx1ZShub2RlKSB7XG4gICAgICBpZiAobm9kZS52YWx1ZSA9PT0gdmFsdWUpIHJldHVybiB0cnVlOyAvLyBJZiB0aGUgdmFsdWUgaXMgZm91bmQsIHJldHVybiB0cnVlXG4gICAgICBpZiAobm9kZS5uZXh0ID09PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfSAvLyBJZiB3ZSByZWFjaCBlbmQgb2YgbGlzdCwgd2UgY2FuIGFzc3VtZSBmYWxzZVxuICAgICAgcmV0dXJuIGZpbmRWYWx1ZShub2RlLm5leHQpOyAvLyBSZWN1cnNpdmVseSBzdGVwIHRocm91Z2ggdW50aWwgZmFsc2Ugb3IgdHJ1ZSBpcyByZXR1cm5lZC5cbiAgICB9XG4gICAgcmV0dXJuIGZpbmRWYWx1ZSh0aGlzKTsgLy8gUGFzcyBhIHJlZmVyZW5jZSB0byB0aGUgaGVhZFxuICB9LFxuICBmaW5kKHZhbHVlKSB7XG4gICAgZnVuY3Rpb24gcmV0dXJuSW5kZXgobm9kZSkge1xuICAgICAgaWYgKG5vZGUudmFsdWUgPT09IHZhbHVlKSByZXR1cm4gMDsgLy8gV2hlbiB5b3UgaGl0IHRoZSBiYXNlIGNhc2UgcmV0dXJuXG4gICAgICBpZiAobm9kZS5uZXh0ID09PSBudWxsKSByZXR1cm4gbnVsbDsgLy8gV2hlbiBubyBoaXQgaXMgZm91bmQsIHJldHVybiBudWxsIHBlciBzcGVjaWZpY2F0aW9uXG4gICAgICByZXR1cm4gMSArIHJldHVybkluZGV4KG5vZGUubmV4dCk7IC8vIERlcGVuZGluZyBvbiBob3cgbWFueSBzdGVwcyB0aGlzIHRha2VzIHdlIHdpbGwgZ2V0IGluZGV4XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5JbmRleCh0aGlzKTtcbiAgfSxcbiAgdG9TdHJpbmcoKSB7XG4gICAgbGV0IGhlYWRTdHJpbmcgPSBgKCAke3RoaXMudmFsdWV9IClgOyAvLyBUaGUgaGVhZCBpcyB0aGUgb25seSBzdGVwIG5vdCBwcmVjZWRlZCBieSBhbiBhcnJvd1xuICAgIGZ1bmN0aW9uIHN0cmluZ2lmeUxpbmtlZExpc3Qobm9kZSkge1xuICAgICAgaWYgKG5vZGUubmV4dCA9PT0gbnVsbCkgeyAvLyBXaGVuIHRoZSBuZXh0IG5vZGUgaXMgbnVsbCwgYXBwZW5kIHRoZSB2YWx1ZSBhbmQgJy0+IE51bGwnXG4gICAgICAgIGhlYWRTdHJpbmcgPSBgJHtoZWFkU3RyaW5nfSAtPiAoICR7bm9kZS52YWx1ZX0gKWAgKyAnIC0+IE51bGwnO1xuICAgICAgICByZXR1cm4gaGVhZFN0cmluZzsgLy8gVGhlbiByZXR1cm4gdGhlIHN0cmluZ1xuICAgICAgfVxuXG4gICAgICBoZWFkU3RyaW5nID0gYCR7aGVhZFN0cmluZ30gLT4gKCAke25vZGUudmFsdWV9IClgOyAvLyBPdGhlcndpc2UganVzdCBhcHBlbmQgdGhlIHZhbHVlXG4gICAgICByZXR1cm4gc3RyaW5naWZ5TGlua2VkTGlzdChub2RlLm5leHQpOyAvLyB0aGVuIGNhbGwgYWdhaW4gdW50aWwgdGhlIGZpbmFsIHN0cmluZyBidWJibGVzIHVwXG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdpZnlMaW5rZWRMaXN0KHRoaXMubmV4dCk7XG4gIH0sXG4gIGluc2VydEF0KHZhbHVlLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMCkgdGhpcy5wcmVwZW5kKHZhbHVlKTsgLy8gVXNlIGV4aXN0aW5nIG1ldGhvZCBmb3IgaGVhZCByZXBsYWNlbWVudFxuICAgIC8vIFByZXBhcmUgdmFyaWFibGVzIHRvIGtlZXAgdHJhY2sgb2Ygbm9kZXMgYXMgd2UgbW92ZSB0aHJvdWdoIHRoZSBsb29wXG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcztcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gbnVsbDtcbiAgICAvLyBDcmVhdCBldGhlIG5ldyBub2RlIGFuZCBhc3NpZ24gaXQgdGhlIG5ldyB2YWx1ZVxuICAgIGNvbnN0IG5ld05vZGUgPSBDcmVhdGVOb2RlKCk7XG4gICAgbmV3Tm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIC8vIEl0ZXJhdGl2ZWx5IHJlYWNoIHRoZSBpbmRleCBmb3IgaW5zZXJ0aW9uXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgLy8gQWxsIHdoaWxlIGtlZXBpbmcgdHJhY2sgb2Ygbm9kZXMgYXMgd2UgbW92ZSB0aHJvdWdoXG4gICAgICBwcmV2aW91c05vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcbiAgICB9XG4gICAgLy8gT25jZSBsb29wIGhhcyBleGl0ZWQgd2UgaGF2ZSB0aGUgbm9kZVxuICAgIC8vIHRoYXQgcHJlY2VkZXMgdGhlIG9uZSB0byBpbnNlcnQsIGFuZFxuICAgIC8vIHRoZSBvbmUgdGhhdCBzaG91bGQgZm9sbG93IGl0LlxuICAgIHByZXZpb3VzTm9kZS5uZXh0ID0gbmV3Tm9kZTtcbiAgICBuZXdOb2RlLm5leHQgPSBjdXJyZW50Tm9kZTtcbiAgICAvLyBSZXR1cm4gdGhlIGxpc3RcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgcmVtb3ZlQXQoaW5kZXgpIHtcbiAgICAvLyBDcmVhdGUgdmFyaWFibGVzIHRvIGtlZXAgdHJhY2sgb2Ygbm9kZXNcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzO1xuICAgIGxldCBwcmV2aW91c05vZGUgPSBudWxsO1xuICAgIGxldCBuZXh0Tm9kZSA9IHRoaXMubmV4dDsgLy8gVGhpcyB0aW1lIHdlIGFsc28gbmVlZCB0byBrbm93IHdoaWNoIG5vZGUgZm9sbG93cyB0aGUgY3VycmVudCBvbmVcbiAgICAvLyBXZSBpdGVyYXRlIHVudGlsIHRoZSBwcm9wZXIgaW5kZXggaXMgcmVhY2hlZFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgIHByZXZpb3VzTm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgbmV4dE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgIH1cbiAgICAvLyBXZSBzaW1wbHkgY3V0IG9mZiB0aGUgJ2N1cnJlbnQgbm9kZSdcbiAgICAvLyBieSBsaWtpbmcgdGhlIG9uZSBwcmVjZWRpbmcgaXQgdG8gdGhlIG9uZSBmb2xsb3dpbmcgaXRcbiAgICAvLyBPbmNlIHRoYXQgb2JqZWN0IGlzIG5vdCByZWZlcnJlZCBieSBhbnl0aGluZyBlbHNlIGluIGNvZGUsXG4gICAgLy8gaXQgYXV0b21hdGljYWxseSBnZXRzIGNvbGxlY3RlZCBieSBKUyBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgcHJldmlvdXNOb2RlLm5leHQgPSBuZXh0Tm9kZTtcbiAgICAvLyBSZXR1cm4gdGhlIGxpc3Qgb25jZSBkb25lXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG59O1xuXG4vLyBGYWN0b3J5IGZvciBsaW5rZWQgbGlzdFxuZnVuY3Rpb24gTGlua2VkTGlzdChoZWFkVmFsdWUpIHtcbiAgLy8gTWFrZSBpdCBwb2ludCB0byBvdXIgbWV0aG9kIG9iamVjdCBsaXRlcmFsIGZvciBpbmhlcml0YW5jZVxuICBjb25zdCBsaW5rTGlzdCA9IE9iamVjdC5jcmVhdGUobGlua2VkTGlzdE1ldGhvZHMpO1xuXG4gIGxpbmtMaXN0LnZhbHVlID0gaGVhZFZhbHVlO1xuICBsaW5rTGlzdC5uZXh0ID0gbnVsbDtcblxuICByZXR1cm4gbGlua0xpc3Q7XG59XG5cbi8vIEZhY3RvcnkgZm9yIGxpbmtlZCBsaXN0IG5vZGVcbmZ1bmN0aW9uIENyZWF0ZU5vZGUoKSB7XG4gIC8vIE91ciBub2RlcyBhY3R1YWxseSBkb24ndCBuZWVkIGluaGVyaXRhbmNlXG4gIGNvbnN0IG5vZGUgPSBPYmplY3QuY3JlYXRlKHt9KTtcblxuICAvLyBJbml0aWFsIHZhbHVlcyBudWxsIHBlciBzcGVjaWZpY2F0aW9uc1xuICBub2RlLnZhbHVlID0gbnVsbDtcbiAgbm9kZS5uZXh0ID0gbnVsbDtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuY29uc3QgbGlzdCA9IExpbmtlZExpc3QoMSk7XG5saXN0LmFwcGVuZCgyKTtcbmxpc3QuYXBwZW5kKDMpO1xubGlzdC5hcHBlbmQoNCk7XG5saXN0LmFwcGVuZCg1KTtcbiJdLCJuYW1lcyI6WyJsaW5rZWRMaXN0TWV0aG9kcyIsImFwcGVuZCIsInZhbHVlIiwidHJhdmVyc2VBbmRBcHBlbmQiLCJub2RlIiwibmV4dCIsIm5ld05vZGUiLCJDcmVhdGVOb2RlIiwidGhpcyIsInByZXBlbmQiLCJoZWFkIiwic2l6ZSIsInRyYXZlcnNlQW5kQ291bnQiLCJ0YWlsIiwibGlzdE5vZGUiLCJhdCIsImluZGV4IiwicmV0dXJuQXQiLCJpbmRleHMiLCJwb3AiLCJpIiwiY3VycmVudE5vZGUiLCJjb250YWlucyIsImZpbmRWYWx1ZSIsImZpbmQiLCJyZXR1cm5JbmRleCIsInRvU3RyaW5nIiwiaGVhZFN0cmluZyIsInN0cmluZ2lmeUxpbmtlZExpc3QiLCJpbnNlcnRBdCIsInByZXZpb3VzTm9kZSIsInJlbW92ZUF0IiwibmV4dE5vZGUiLCJPYmplY3QiLCJjcmVhdGUiLCJsaXN0IiwiaGVhZFZhbHVlIiwibGlua0xpc3QiLCJMaW5rZWRMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==