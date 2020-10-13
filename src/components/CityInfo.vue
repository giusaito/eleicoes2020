<template>
  <div>
    <div id="main-city-header" class="main-city-header clearfix">
      <div class="main-search-city-input">
        <div class="search-city-input is-favorite-false">
          <div class="search-form-element search-form-close">
            <i class="icon-search"></i>
            <i class="icon-close"></i>
            <input type="text" class="input suggest-input" autocomplete="off" name="q" placeholder="Escreva o nome do estado" autofocus="">
            <div class="suggest-area suggest-area-disabled"></div>
          </div>
        </div>
      </div>
      <div class="main-city-info">
        <div class="city-info">
          <h2 class="city-name">Brasil
            <span class="state-name">
            <a href="#" id="changeLocale" data-type="1">
            </a>
            </span>
          </h2>
          <div class="progress-bar-container">
            <span class="polls">
            <span class="polls-label">URNAS APURADAS</span>
            <span class="polls-number">0</span>
            <span class="polls-percent">%</span>
            </span>
            <span class="progress-bar-wrapper progress-bar-wrapper-full" data-percent="100" style="width: 100%;">
            <span class="progress-bar voters-bar" data-percent="100" style="width: 0%;"></span>
            <span class="progress-bar missing-voters-bar" data-percent="0" style="width: 0%;"></span>
            </span>
            <span class="progress-bar full-bar" style="width: 0%;"></span>
            <span class="progress-bar-labels">
            <span class="progress-label label-total left">
            <span class="total">147.306.294</span>
            <span class="name">ELEITORES</span>
            </span>
            </span>
            <span class="progress-bar-labels votantes" style="min-width: 235px; max-width: 693px; width: 727.96px;">
            </span>
            <span class="progress-bar-labels alinha" style="text-align: right; min-width: 355px; max-width: 813px; width: 847.96px;">
            <span class="progress-label label-percentage right"><span class="total">
            <span class="circle blue"></span> 0%</span>
            <span class="name">VOTANTES</span>
            </span>
            <span class="progress-label label-missing right">
            <span class="total">
            <span class="circle grey"></span> 0%</span>
            <span class="name">AUSENTES</span>
            </span>
            </span>
            <span class="ranges" style="display: none; position: fixed; left: 113px; top: -56px; z-index: 37;"><br><br>
            SAP 
            <input class="range data-sap" type="range" min="0" max="100" step="1" style="margin-right: 10px;">
            VOP 
            <input class="range data-vop" type="range" min="0" max="100" step="1" style="margin-right: 10px;">
            FIG 
            <input class="range data-figures" type="range" min="0" max="100" step="1">
            </span>
            <p class="awaiting">Apuração não iniciada</p>
          </div>
        </div>
      </div>
      <!-- <div class="main-search-city search-desktop">
        <div class="search-city">
          <button type="button" class="btn-change">
            <p>Mudar cidade</p> 
            <i class="icon-search"></i>
          </button>
        </div>
        </div> -->
    </div>





    
  </div>
</template>