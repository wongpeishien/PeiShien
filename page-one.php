<?php include "assets/includes/header.php";?>
<?php include "assets/includes/nav.php";?>
    <div class="container mt-5">
        <!-- Group Post By User ID -->
        <div class="row">
            <div class="col-md-5">
                <div class="input-group mb-3">
                    <input type="text" id="user-id" value="" class="form-control"
                        placeholder="Group the posts by User ID" />
                    <div class="input-group-append">
                        <button type="button" class="btn btn-secondary" id="btn-user-search"> Submit </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div id="post-content"></div>
            </div>
        </div>
        <!-- END Group Post By User ID -->

        <!-- Table -->
        <div class="table-responsive">
            <table class="table table-sm table-striped table-bordered" id="table-request-list">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID </th>
                        <th scope="col">User ID</th>
                        <th scope="col" class="title">
                            <div class="d-inline-block">Title</div>
                            <div class="d-inline-block sorter">
                                <span class="sort-asc" onclick="sortByAlphabet();"><i class="fas fa-sort-up"></i></span>
                            </div>
                        </th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <!-- END Table -->

<!-- JAVASCRIP -->
<?php include "assets/includes/footer.php";?>
<script type="text/javascript" src="./assets/js/page-one.js"></script>
