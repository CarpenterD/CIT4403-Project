/**
 * Collects the urls for russian recipes from alllrecipes.com
 *
 * Site is dynamic and has mild pagination therefor this process is only MILDLY AUTOMATED
 * -- NOTE Some (minimal) human effort is required --
 *
 *
 * -------------------------------------------------------------------------------------------------
 * STEPS TO RUN CODE
 *
 * 1. Using a browser that has a developer console, navigate to the allrecipes page:
 *    https://www.allrecipes.com/recipes/716/world-cuisine/european/eastern-european/russian/
 *
 * 2. Scroll to the bottom of the page and press the "more" button as many times as it will allow.
 *    This ensure that all 'pages' of recipes are loaded into the browser
 *
 * 3. Open the developer console (probably with 'F12'), paste in the code below, and press 'Enter'
 *    (if the list of urls is not displayed - type "urls" and press 'Enter' again)
 *
 * 4. Copy the output and save it into a json file (try right clicking on output)
 *
 * ------------------------------------------------------------------------------------------------
 * RELEVANT PAGE STRUCTURE
 *
 * <!--Each recipe is contained in an article tag-->
 * <article class="fixed-recipe-card">
 *      ...
 *      <div class="grid-card-image-container">
 *          <a class="ng-isolate-scope" href="https://allrecipes.com/.../RECIPEXYZ"></a>
 *          <!--FirstElementChild is the anchor we are looking for. Note that FirstChild is an unrelated text node-->
 *          ...
 *          <!--other children may include another anchor tag. Just so you know...-->
 *      </div>
 *      ...
 * </article>
 * ------------------------------------------------------------------------------------------------
 * */

recipeTiles = Array.from(document.getElementsByClassName("grid-card-image-container"))
urls = recipeTiles.map(tile => tile.firstElementChild.getAttribute("href").replace(/[?].*/, ""))

console.log(urls)
