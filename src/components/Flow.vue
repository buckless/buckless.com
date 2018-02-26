<template>
  <div class="flow container">
    <div class="timeline-wrapper">
      <div class="timeline">
        <div>
          <section class="year">
            <h3>2007</h3>
            <div>
              <ul>
                <li>Satoshi Nakamoto began working on the Bitcoin concept.</li>
              </ul>
            </div>
          </section>
          <section class="year">
            <h3>2008</h3>
            <div>
              <ul>
                <li>Neal Kin, Vladimir Oksman, and Charles Bry file an application for an encryption patent application.</li>
                <li>Bitcoin.org was registered at <a href="https://anonymousspeech.com/">anonymousspeech.com</a>.</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Nakamoto describes the Bitcoin currency and solves the problem of double spending.</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>The Bitcoin project is registered on <a href="https://sourceforge.net/">SourceForge.net</a>.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.flow {
  padding-top: 80px;
}

.timeline-wrapper {
  max-height: 400px;
  overflow: auto;
}

.timeline {
  position: relative;
}

.timeline > div:after {
  content: '';
  width: 2px;
  position: absolute;
  top: .5rem;
  bottom: 0rem;
  left: 60px;
  z-index: 1;
  background: #c5c5c5;
}

.timeline .year {
  position: relative;
}

.timeline .year h3 {
  /* position: sticky; */
  position: relative;
  top: 35px;
  margin: 0;
  color: #888;
}

.timeline .year div {
}

.timeline .year div:first-child {
}

.timeline .year div ul {
    list-style-type: none;
    max-width: 32rem;
    position: relative;
    padding-left: 80px;
}

.timeline .year div ul li {
    margin-left: .5rem;
}

.timeline .year div ul:first-of-type:after {
    content: '';
    width: 8px;
    height: 8px;
    background: #fff;
    border: 4px solid #14967c;
    border-radius: 50%;
    position: absolute;
    left: 53px;
    top: 0;
    z-index: 2;
}
</style>
