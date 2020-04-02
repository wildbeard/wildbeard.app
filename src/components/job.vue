<template>
    
    <div class="company" :class="companyClass">
        <div class="company-info">
            <div class="where">
                <span class="bold company-name" :class="job.company.class">
                    {{ job.company.name }}<span class="desktop-only">,</span>
                </span>
                <span class="fancy company-location">{{ job.location }}</span>
            </div>
            <div class="timeline">{{ job.duration }}</div>
            <div class="title">{{ job.title }}</div>
            <div class="technologies">
                <span class="bold" :class="job.company.class">Technologies Used</span>:
                {{ job.technologies }}
            </div>
            <ul class="callouts">
                <li v-for="(callout, index) in job.callouts" :key="index">
                    <template v-if="typeof callout === 'object'">
                        {{ callout.desc }}
                        <ul class="side-by-side small">
                            <li v-for="(subCallout, subIndex) in callout.callouts" :key="subIndex">
                                <div v-html="subCallout"></div>
                            </li>
                        </ul>
                    </template>
                    <template v-else>
                        <div v-html="callout"></div>
                    </template>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    props: [ 'job' ],
    computed: {
        companyClass() {
            return `company-${this.job.company.class}`;
        }
    }
}
</script>

<style lang="scss">
    /*
        If I scope this the subCallout from above doesn't
        receive the .company-name styles
    */
    @import '~sass/_mixins.scss';
    @import '~sass/_variables.scss';
    .company {
        margin-bottom: 25px;
        .where, .title, .timeline {
            font-family: $serif;
            .bold {
                letter-spacing: 1px;
            }
        }
		.company-info {
			display: flex;
			flex-wrap: wrap;
		}
		.where {
			flex: 0 0 60%;
		}
		.title, .callouts {
			flex: 0 0 100%;
		}
		.title {
			font-weight: bold;
            letter-spacing: 1px;
		}
        .technologies {
            span {
                font-family: $serif;
                letter-spacing: 1px;
            }
            font-size: 0.85em;
        }
		.timeline {
			flex: 0 0 40%;
			text-align: right;
		}
		@include media-screen(800px) {
			.where, .title, .timeline {
				flex: 0 0 100%;
            }
            .title {
                margin-bottom: $gutter * .75;
                padding-bottom: $gutter * .15;
                border-bottom: 2px solid #333;
            }
			.where span {
				display: block;
			}
			.timeline {
				text-align: left;
			}
		}
	}
	.callouts {
		& > li {
			margin: 0;
		}
	}
	@include media-screen(800px) {
		ul, .callouts {
			padding-left: $gutter;
        }
        .company-info {
            .company-name {
                font-size: 1.3em;
                span {
                    display: inline;
                }
            }
            .company-location {
                font-size: 0.85em;
            }
            .timeline {
                font-size: 0.85em;
            }
        }
	}
    @each $name, $color in $colors {
        .company-#{$name} {
            a, a:hover, a:active, a,:visited {
                color: $color;
                font-weight: bold;
            }
            strong {
                color: $color;
                font-weight: bold;
            }
            #{$name} {
                color: $color;
            }
        }
    }
    @media print {
        .company.company-tig {
            margin-bottom: 60px;
        }
    }
</style>